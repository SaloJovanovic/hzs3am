package am.recharge.backend.controllers;

import am.recharge.backend.modules.User;
import am.recharge.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/")
public class UserController {
    private final UserService userService;

    @PostMapping("/verification")
    public String sendVerificationEmail(@RequestParam String email) {
        return userService.sendVerificationEmail(email);
    }

    @PostMapping("/create-new")
    public User createNewUser (@RequestBody User userBody, @RequestParam int code) {
        return userService.createNewUser(userBody, code);
    }
}
