package am.recharge.backend.controllers;

import am.recharge.backend.modelSlika.*;
import am.recharge.backend.modelSponsor.Benefit;
import am.recharge.backend.modelSponsor.BenefitInfo;
import am.recharge.backend.modelSponsor.Sponsor;
import am.recharge.backend.modelSponsor.SponsorInfo;
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
    public List<Sponsor> getSiteSponsors(){
        return sponsorService.getSiteSponsor();
    }
    @GetMapping("/benefit/shop")
    public List<Benefit> getBenefitShop() {
        return sponsorService.getBenefitShop();
    }
    @PostMapping("/benefit/create-new")
    public Benefit createBenefit(@RequestBody BenefitInfo benInfo){
        return sponsorService.createBenefit(benInfo);
    }
    @GetMapping("/benefit/id-search")
    public Benefit getBenefitById(@RequestParam String idBenefit) {
        return sponsorService.getBenefitById(idBenefit);
    }
    @GetMapping("/id-search")
    public Sponsor getSponsorById(@RequestParam String idSponsor) {
        return sponsorService.getSponsorById(idSponsor);
    }
    @PostMapping("/create-new")
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
}
