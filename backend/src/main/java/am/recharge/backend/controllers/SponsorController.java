package am.recharge.backend.controllers;

import am.recharge.backend.modelSlika.*;
import am.recharge.backend.modelSponsor.Benefit;
import am.recharge.backend.modelSponsor.BenefitInfo;
import am.recharge.backend.modelSponsor.Sponsor;
import am.recharge.backend.modelSponsor.SponsorInfo;
import am.recharge.backend.modules.CodeModel;
import am.recharge.backend.services.SponsorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sponsor/")
public class SponsorController {
    private final SponsorService sponsorService;
    private final SlikaRepository slikaRepository;
    @RequestMapping(method = RequestMethod.OPTIONS)
    ResponseEntity<?> options() {
        return ResponseEntity
                .ok()
                .allow(HttpMethod.GET, HttpMethod.POST, HttpMethod.DELETE)
                .build();
    }
    @GetMapping("/allsite")
    @CrossOrigin
    public List<Sponsor> getSiteSponsors(){
        return sponsorService.getSiteSponsor();
    }
    @GetMapping("/benefit/shop")
    @CrossOrigin
    public List<Benefit> getBenefitShop() {
        return sponsorService.getBenefitShop();
    }
    @PostMapping("/benefit/create-new")
    @CrossOrigin
    public Benefit createBenefit(@RequestBody BenefitInfo benInfo){
        return sponsorService.createBenefit(benInfo);
    }
    @GetMapping("/benefit/id-search")
    @CrossOrigin
    public Benefit getBenefitById(@RequestParam String idBenefit) {
        return sponsorService.getBenefitById(idBenefit);
    }
    @GetMapping("/id-search")
    @CrossOrigin
    public Sponsor getSponsorById(@RequestParam String idSponsor) {
        return sponsorService.getSponsorById(idSponsor);
    }
    @PostMapping("/create-new")
    @CrossOrigin
    public Sponsor createSponsor(@RequestBody SponsorInfo sponsorInfo){
        return sponsorService.createSponsor(sponsorInfo);
    }
    @GetMapping(value = "/logo", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    @ResponseBody
    @CrossOrigin
    public byte[] image(@RequestParam String sponsorID){
        Sponsor s = sponsorService.getSponsorById(sponsorID);
        byte[] data = null;
        Slika file = slikaRepository.findById(s.getLogoID()).orElse(null);
        if(file != null){
            data = file.getContent().getData();
        }
        return data;
    }
    @GetMapping("/benefit-code")
    @CrossOrigin
    public CodeModel getBenefitCode(@RequestParam String benefitID, @RequestParam String userID){
        System.out.println(benefitID+" "+userID);
        return sponsorService.getBenefitCode(benefitID, userID);
    }
}
