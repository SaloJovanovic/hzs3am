package am.recharge.backend.services;

import am.recharge.backend.repositories.EmailVerifyRepository;
import am.recharge.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final EmailVerifyRepository emailVerifyRepository;

    @Autowired
    private final EmailSenderService emailSenderService;
}
