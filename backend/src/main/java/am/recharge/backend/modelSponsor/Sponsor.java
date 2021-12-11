package am.recharge.backend.modelSponsor;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document
public class Sponsor {
    @Id
    private String id;

    private String companyName;
    private List<String> idBenefits;
    private String logoID;
    private boolean sajt;

    public Sponsor(String companyName, List<String> idBenefits, String logoID, boolean sajt) {
        this.companyName = companyName;
        this.idBenefits = new ArrayList<String>();
        this.logoID = logoID;
        this.sajt = sajt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public List<String> getIdBenefits() {
        return idBenefits;
    }

    public void setIdBenefits(List<String> idBenefits) {
        this.idBenefits = idBenefits;
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
