package am.recharge.backend.services;

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

import java.util.Optional;
import java.util.Random;

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
}
