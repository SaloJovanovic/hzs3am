package am.recharge.backend.modelSponsor;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Benefit {
    @Id
    private String id;

    private String description;
    private int points;
    private String reward;
    private String sponsorID;

    public Benefit(String description, int points, String reward, String sponsorID) {
        this.description = description;
        this.points = points;
        this.reward = reward;
        this.sponsorID = sponsorID;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public String getReward() {
        return reward;
    }

    public void setReward(String reward) {
        this.reward = reward;
    }

    public String getSponsorID() {
        return sponsorID;
    }

    public void setSponsorID(String sponsorID) {
        this.sponsorID = sponsorID;
    }
}
