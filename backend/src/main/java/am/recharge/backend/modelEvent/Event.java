package am.recharge.backend.modelEvent;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Document
public class Event {

    @Id
    private String id;

    private String title;
    private LocalDateTime time;
    private String address;
    private String city;
    private int views;
    private int numI;
    private List<String> userI;
    private int points;
    private Boolean verified;
    private String userID;
    private String description;
    private String code;
    private boolean sponsored;
    private String sponsorID;
    private String benefitID;
    private int numberOfBenefits;

    public Event(String title, LocalDateTime time, String address, String city, int points, Boolean verified, String userID, String description, boolean sponsored,String sponsorID,String benefitID,int numberOfBenefits) {
        this.title = title;
        this.time = time;
        this.address = address;
        this.city = city;
        this.views = 0;
        this.numI = 0;
        this.userI = new ArrayList<>();
        this.points = points;
        this.verified = verified;
        this.userID = userID;
        this.description = description;
        this.code = UUID.randomUUID().toString();
        code = code.replace("-","");
        code = code.substring(0,12);
        this.sponsored = sponsored;
        this.sponsorID = sponsorID;
        this.benefitID = benefitID;
        this.numberOfBenefits = numberOfBenefits;
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

    public boolean isSponsored() {
        return sponsored;
    }

    public void setSponsored(boolean sponsored) {
        this.sponsored = sponsored;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public Boolean getVerified() {
        return verified;
    }

    public void setVerified(Boolean verified) {
        this.verified = verified;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getNumI() {
        return numI;
    }

    public void setNumI(int numI) {
        this.numI = numI;
    }

    public List<String> getUserI() {
        return userI;
    }

    public void setUserI(List<String> userI) {
        this.userI = userI;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
    public void addUserI(String userID){
        userI.add(userID);
        numI++;
    }
}
