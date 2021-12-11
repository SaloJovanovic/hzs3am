package am.recharge.backend.repositories;

import am.recharge.backend.modules.EmailVerify;

import java.util.Optional;

public interface EmailVerifyRepository {
    Optional<EmailVerify> findByEmail(String email);
}
