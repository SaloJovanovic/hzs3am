package am.recharge.backend.modelSponsor;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BenefitRepository extends MongoRepository<Benefit, String> {
}
