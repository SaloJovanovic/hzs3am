package am.recharge.backend.modules;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AddPointsData {
    String userID;
    String eventID;
    String code;
}
