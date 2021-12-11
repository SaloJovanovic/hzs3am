package am.recharge.backend.controllers;

import am.recharge.backend.modules.LoginCreds;
import am.recharge.backend.modules.LoginInfo;
import am.recharge.backend.modules.User;
import am.recharge.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/")
public class UserController {
    private final UserService userService;

    @CrossOrigin
    @PostMapping("/verification")
    public String sendVerificationEmail(@RequestParam String email) {
        return userService.sendVerificationEmail(email);
    }

    @CrossOrigin
    @PostMapping("/create-new")
    public User createNewUser (@RequestBody User userBody, @RequestParam int code) {
        return userService.createNewUser(userBody, code);
    }

    @CrossOrigin
    @PutMapping("/add-eventinterested")
    public User addEventInterested (@RequestParam String id, @RequestParam String eventID) {
        return userService.addEventInterested(id, eventID);
    }

    @CrossOrigin
    @PutMapping("/add-eventcreated")
    public User addEventCreated (@RequestParam String id, @RequestParam String eventID) {
        return userService.addEventCreated(id, eventID);
    }

    @GetMapping("/findByID")
    public User findUserByID (@RequestParam String id) {
        return userService.findUserByID(id);
    }

    @PostMapping("/login")
    public LoginCreds loginByUsernameOrEmail (@RequestBody LoginInfo loginInfo) {
        return userService.loginByUsernameOrEmail(loginInfo);
    }

    @PutMapping("/verify-user")
    public User verifyUserByID (@RequestParam String id) {
        return userService.verifyUserByID(id);
    }
}
