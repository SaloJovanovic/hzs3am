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
    public Benefit getBenefitById(String idBenefit){
        return benefitRepository.findById(idBenefit).orElse(null);
    }
    public Sponsor getSponsorById(String idSponsor){
        return sponsorRepository.findById(idSponsor).orElse(null);
    }
    public Sponsor createSponsor(SponsorInfo s){
        Sponsor sponsor = new Sponsor(s.getCompanyName(),s.getLogoID(),s.isSajt());
        return sponsorRepository.insert(sponsor);
    }
    public Benefit createBenefit(BenefitInfo b){
        Benefit ben = new Benefit(b.getDescription(),b.getPoints(),b.getReward(),b.getSponsorID());
        Benefit savedBenefit = benefitRepository.insert(ben);
        Sponsor s = sponsorRepository.findById(b.getSponsorID()).orElse(null);
        s.addBenefit(savedBenefit.getId());
        sponsorRepository.save(s);
        return savedBenefit;
    }
    public List<Sponsor> getSiteSponsor(){
        List<Sponsor> s = sponsorRepository.findAll();
        List<Sponsor> ss = new ArrayList<Sponsor>();
        for (Sponsor sponsor : s) {
            if(sponsor.isSajt()){
                ss.add(sponsor);
            }
        }
        return ss;
    }
    public List<Benefit> getBenefitShop() {
        List<Sponsor> s = getSiteSponsor();
        List<Benefit> b = new ArrayList<Benefit>();
        for (Sponsor sponsor : s) {
            for (String idBenefits : sponsor.getIdBenefits()) {
                b.add(benefitRepository.findById(idBenefits).orElse(null));
            }

        }
        return b;
    }


}
