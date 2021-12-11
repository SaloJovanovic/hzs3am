package am.recharge.backend.services;

import am.recharge.backend.modelEvent.EventRepository;
import am.recharge.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import am.recharge.backend.modelEvent.*;
import am.recharge.backend.modules.*;
import am.recharge.backend.repositories.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
@Slf4j
public class EventService {
    private final EventRepository eventRepository;
    private final UserRepository userRepository;

    public List<Event> getAllEvents(){
        return eventRepository.findAll();
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
        Event e = new Event(eventInfo.getTitle(), eventInfo.getTime(), eventInfo.getAdress(), eventInfo.getCity(), eventInfo.getPoints(),u.isVerified(), userID);
        eventRepository.insert(e);
        return e;
    }
    public Event putAViewOnEvent(String eventID){
        Event e = eventRepository.findById(eventID).orElse(null);
        e.setViews(e.getViews()+1);
        eventRepository.save(e);
        return e;
    }
    public Event putUserInterested(String userID, String eventID){
        Event e = eventRepository.findById(eventID).orElse(null);
        e.addUserI(userID);
        eventRepository.save(e);
        return e;
    }

}
