package am.recharge.backend.repositories;

import am.recharge.backend.modules.EmailVerify;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface EmailVerifyRepository extends MongoRepository<EmailVerify, String> {
    Optional<EmailVerify> findByEmail(String email);
}
