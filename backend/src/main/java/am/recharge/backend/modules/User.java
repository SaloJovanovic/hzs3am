package am.recharge.backend.modules;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Builder
@Document
public class User {
    @Id
    private String id;

    private String ime;
    private String prezime;
    private String username;
    private String email;
    private String password;
    private LocalDate datumRodjenja;
    private LocalDate datumKreiranja;

    private boolean verified;
    private String adresa;
    private int points;

    //Napraviti EVENT
}
