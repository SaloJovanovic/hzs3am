package am.recharge.backend.controllers;

import am.recharge.backend.modelSponsor.Sponsor;
import am.recharge.backend.modelSponsor.SponsorRepository;
import am.recharge.backend.services.SponsorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sponsor/")
public class SponsorController {
    private final SponsorService sponsorService;
    @RequestMapping(method = RequestMethod.OPTIONS)
    ResponseEntity<?> options() {
        return ResponseEntity
                .ok()
                .allow(HttpMethod.GET, HttpMethod.POST, HttpMethod.DELETE)
                .build();
    }
    //@GetMapping("/allsite")
    //public List<Sponsor> getSiteSponsors(){
    //    return sponsorService.getSiteSponsor();
    //}
    //@GetMapping("/allsite")
    //public List<Sponsor> getSiteSponsors(){
    //    return sponsorService.getSiteSponsor();
    //}
}
