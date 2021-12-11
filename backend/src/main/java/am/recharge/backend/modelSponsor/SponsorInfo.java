package am.recharge.backend.modelSponsor;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class SponsorInfo {
    private String companyName;
    private String logoID;
    private boolean sajt;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getLogoID() {
        return logoID;
    }

    public void setLogoID(String logoID) {
        this.logoID = logoID;
    }

    public boolean isSajt() {
        return sajt;
    }

    public void setSajt(boolean sajt) {
        this.sajt = sajt;
    }
}
