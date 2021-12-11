package am.recharge.backend.modules;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document
public class EmailVerify {
    @Id
    private String id;

    private String email;
    private int code;
}
