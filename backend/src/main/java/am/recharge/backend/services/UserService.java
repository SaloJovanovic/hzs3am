package am.recharge.backend.services;

import am.recharge.backend.modules.User;
import am.recharge.backend.repositories.EmailVerifyRepository;
import am.recharge.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import am.recharge.backend.modules.EmailVerify;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Locale;
import java.util.Optional;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@AllArgsConstructor
@Service
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final EmailVerifyRepository emailVerifyRepository;

    @Autowired
    private final EmailSenderService emailSenderService;

    public String sendVerificationEmail (String receiver) {
        Random rand = new Random();
        int code = rand.nextInt(999999 - 100000) + 100000;


        String subject = "3AM Verification Code";
        String body = "Vas verifikacioni kod je " + code;

        emailSenderService.sendEmail(receiver, subject, body);

        Optional<EmailVerify> existingEmail = emailVerifyRepository.findByEmail(receiver);

        EmailVerify emailVerify;
        if (existingEmail.isPresent()) {
            emailVerify = existingEmail.get();
            emailVerify.setCode(code);
        }
        else {
            emailVerify = EmailVerify.builder()
                    .email(receiver)
                    .code(code)
                    .build();
        }

        try {
            emailVerifyRepository.save(emailVerify);
        } catch (DataIntegrityViolationException exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        return "Sent to " + receiver;
    }

    static boolean containsIllegals(String toExamine) {
        Pattern pattern = Pattern.compile("[~#@*+?!%{}<>\\[\\]|\"\\_^]");
        Matcher matcher = pattern.matcher(toExamine);
        return matcher.find();
    }

    public boolean validateVerificationCode (String email, int code) {
        Optional<EmailVerify> emailVerifyO = emailVerifyRepository.findByEmail(email);
        if(!emailVerifyO.isPresent()) throw new ResponseStatusException(HttpStatus.NOT_FOUND);


        EmailVerify emailVerify = emailVerifyO.get();
        return emailVerify.getCode() == code;
    }

    public User createNewUser(User userBody, int code) {

        String ime = userBody.getIme().trim();
        String prezime = userBody.getPrezime().trim();
        String username = userBody.getUsername().trim().toLowerCase(Locale.ROOT).replaceAll(" ", "");
        String password = userBody.getPassword().trim();
        String email = userBody.getEmail().trim();
        LocalDate datumRodjenja = userBody.getDatumRodjenja();
        LocalDate datumKreiranja = LocalDate.now();

        boolean verified = userBody.isVerified();
        String adresa = userBody.getAdresa().trim();
        String grad = userBody.getGrad().trim();

        final int maxStringLength = 64;
        final int maxUsernameLength = 23;
        final int minPasswordLength = 8;

        if (ime.length() > maxStringLength || prezime.length() > maxStringLength || adresa.length() > maxStringLength || grad.length() > maxStringLength)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        if(username.length() > maxUsernameLength)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        if (password.length() < minPasswordLength)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        if (containsIllegals(ime) || containsIllegals(prezime) || containsIllegals(username))
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);

        Optional<User> userFindAttempt = userRepository.findByUsername(username);
        if (userFindAttempt.isPresent())
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);

        if (!validateVerificationCode(email, code)) throw new ResponseStatusException(HttpStatus.FORBIDDEN);;

        String passwordHASHED = PasswordHashing.doHashing(password);

        User savedUser = User.builder()
                .ime(ime)
                .prezime(prezime)
                .username(username)
                .email(email)
                .password(passwordHASHED)
                .datumRodjenja(datumRodjenja)
                .datumKreiranja(datumKreiranja)
                .adresa(adresa)
                .grad(grad)
                .points(0)
                .verified(verified)
                .build();

        try { return userRepository.save(savedUser); }
        catch (DataIntegrityViolationException exception) { throw new ResponseStatusException(HttpStatus.BAD_REQUEST); }
    }
}
