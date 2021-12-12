package am.recharge.backend.services;

import am.recharge.backend.modelSponsor.Sponsor;
import am.recharge.backend.modelSponsor.SponsorInfo;
import am.recharge.backend.modelSponsor.SponsorRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
@Slf4j
public class SponsorService {
    private final SponsorRepository sponsorRepository;
    public Sponsor createSponsor(SponsorInfo s){
        Sponsor sponsor = new Sponsor(s.getCompanyName(),s.getLogoID(),s.isSajt());
        return sponsorRepository.insert(sponsor);
    }
    //public List<Sponsor> getS
}
