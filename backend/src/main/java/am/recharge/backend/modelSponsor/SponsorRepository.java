package am.recharge.backend.modelSponsor;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SponsorRepository extends MongoRepository<Sponsor, String> {
}
