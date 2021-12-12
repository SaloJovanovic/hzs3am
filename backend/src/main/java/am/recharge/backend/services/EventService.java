package am.recharge.backend.services;

import am.recharge.backend.modelEvent.EventRepository;
import am.recharge.backend.repositories.UserRepository;
import com.fasterxml.jackson.databind.ser.impl.UnknownSerializer;
import com.sun.java.accessibility.util.EventID;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import am.recharge.backend.modelEvent.*;
import am.recharge.backend.modules.*;
import am.recharge.backend.repositories.*;
import am.recharge.backend.services.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
@Slf4j
public class EventService {
    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }
    public List<Event> getEventByCity(String city){
        List<Event> es = getAllEvents();
        List<Event> salji = new ArrayList<Event>();
        for (Event e : es){
            if(city.equals(e.getCity())){
                salji.add(e);
            }
        }
        return salji;
    }
    public Event getEventById(String eventID){
        return eventRepository.findById(eventID).orElse(null);
    }
    public List<Event> getEventsCreatedByUserId(String userID){
        User u = userRepository.findById(userID).orElse(null);
        List<String> eventsID = u.getEventsCreated();
        List<Event> es = new ArrayList<Event>();
        for(String s : eventsID){
            es.add(eventRepository.findById(s).orElse(null));
        }
        return es;
    }
    public List<Event> getEventsInterestedByUserId(String userID){
        User u = userRepository.findById(userID).orElse(null);
        List<String> eventsID = u.getEventsInterested();
        List<Event> es = new ArrayList<Event>();
        for(String s : eventsID){
            es.add(eventRepository.findById(s).orElse(null));
        }
        return es;
    }
    
    public Event createEvent (EventInfo eventInfo, String userID) {
        User u = userRepository.findById(userID).orElse(null);
        Event e = new Event(eventInfo.getTitle(), eventInfo.getTime(), eventInfo.getAddress(), eventInfo.getCity(), eventInfo.getPoints(),u.isVerified(), userID, eventInfo.getDescription(),eventInfo.isSponsored(),eventInfo.getSponsorID(),eventInfo.getBenefitID(),eventInfo.getNumberOfBenefits());
        Event savedEvent = eventRepository.insert(e);
        userService.addEventCreated(userID, savedEvent.getId());
        return e;
    }

    public Event putAViewOnEvent(String eventID){
        Event e = eventRepository.findById(eventID).orElse(null);
        e.setViews(e.getViews()+1);
        eventRepository.save(e);
        return e;
    }
    public Event putUserInterested(String eventID, String userID){
        Event e = eventRepository.findById(eventID).orElse(null);
        e.addUserI(userID);
        userService.addEventInterested(userID,eventID);
        eventRepository.save(e);
        return e;
    }

}
