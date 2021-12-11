package am.recharge.backend.controllers;

import am.recharge.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/")
public class UserController {
    private final UserService userService;

    @PostMapping("/verification")
    public String sendVerificationEmail(@RequestParam String email) {
        return userService.sendVerificationEmail(email);
    }
}
