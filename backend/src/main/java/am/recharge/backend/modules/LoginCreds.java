package am.recharge.backend.modules;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginCreds {
    private String id;
    private boolean success;
    private String username;
    private String email;
}
