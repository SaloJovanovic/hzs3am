package am.recharge.backend.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import am.recharge.backend.modelEvent.EventRepository;
import am.recharge.backend.repositories.UserRepository;
import am.recharge.backend.modelEvent.*;
import am.recharge.backend.modules.*;
import am.recharge.backend.repositories.*;
import am.recharge.backend.services.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/event/")
public class EventController {
    private final EventService eventService;
    @RequestMapping(method = RequestMethod.OPTIONS)
    ResponseEntity<?> options() {
        return ResponseEntity
                .ok()
                .allow(HttpMethod.GET, HttpMethod.POST, HttpMethod.DELETE)
                .build();
    }
    @CrossOrigin
    @GetMapping("/id-search")
    public Event getEventByID(@RequestParam String eventID){
        return eventService.getEventById(eventID);
    }
    @CrossOrigin
    @GetMapping("/userInterestedId-search")
    public List<Event> getEventsInterestedByUserID(@RequestParam String userID){
        return eventService.getEventsInterestedByUserId(userID);
    }
    @CrossOrigin
    @GetMapping("/userCreatedId-search")
    public List<Event> getEventsCreatedByUserID(@RequestParam String userID){
        return eventService.getEventsCreatedByUserId(userID);
    }
    @CrossOrigin
    @PostMapping("/create-new")
    public Event postEvent(@RequestParam String userID, @RequestBody EventInfo eventInfo){
        return eventService.createEvent(eventInfo, userID);
    }
    @CrossOrigin
    @PutMapping("/getting-viewed")
    public Event putEventViewAdd(@RequestParam String eventID){
        return eventService.putAViewOnEvent(eventID);
    }
    @CrossOrigin
    @PutMapping("/getting-interested")
    public Event putEventViewAdd(@RequestParam String eventID,@RequestParam String userID){
        return eventService.putUserInterested(eventID,userID);
    }
}
