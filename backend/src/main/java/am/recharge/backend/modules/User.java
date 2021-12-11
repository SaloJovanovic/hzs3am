package am.recharge.backend.modules;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

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

    private String adresa;
    private String grad;
    private int points;
    private boolean verified;

    private List<String> eventsInterested;
    private List<String> eventsCreated;
    private double grade;
    //Napraviti EVENT
}
