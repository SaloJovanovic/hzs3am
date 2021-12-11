package am.recharge.backend.services;

import am.recharge.backend.modelSponsor.*;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
@Slf4j
public class SponsorService {
    private final SponsorRepository sponsorRepository;
    private final BenefitRepository benefitRepository;
    public Sponsor createSponsor(SponsorInfo s){
        Sponsor sponsor = new Sponsor(s.getCompanyName(),s.getLogoID(),s.isSajt());
        return sponsorRepository.insert(sponsor);
    }
    public List<Sponsor> getSiteSponsor(){
        List<Sponsor> s = sponsorRepository.findAll();
        for (Sponsor sponsor : s) {
            if(!sponsor.isSajt()){
                s.remove(sponsor);
            }
        }
        return s;
    }
    public List<Benefit> getBenefitShop() {
        List<Sponsor> s = getSiteSponsor();
        List<Benefit> b = new ArrayList<Benefit>();
        for(Sponsor sponsor:s){
            for(String idBenefits:sponsor.getIdBenefits()){
                b.add(benefitRepository.findById(idBenefits).orElse(null));
            }

        }
        return b;
    }

}
