package am.recharge.backend.modelEvent;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@Document
public class EventInfo {
    private String title;
    private LocalDateTime time;
    private String address;
    private String city;
    private int points;
    private String description;
    private boolean sponsored;
    private String sponsorID;
    private String benefitID;
    private int numberOfBenefits;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isSponsored() {
        return sponsored;
    }

    public void setSponsored(boolean sponsored) {
        this.sponsored = sponsored;
    }

    public String getSponsorID() {
        return sponsorID;
    }

    public void setSponsorID(String sponsorID) {
        this.sponsorID = sponsorID;
    }

    public String getBenefitID() {
        return benefitID;
    }

    public void setBenefitID(String benefitID) {
        this.benefitID = benefitID;
    }

    public int getNumberOfBenefits() {
        return numberOfBenefits;
    }

    public void setNumberOfBenefits(int numberOfBenefits) {
        this.numberOfBenefits = numberOfBenefits;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String adress) {
        this.address = adress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
