package am.recharge.backend.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.bson.types.Binary;
import am.recharge.backend.modelSlika.*;

import java.io.IOException;

@RestController
@RequestMapping("/slike")
@RequiredArgsConstructor
public class SlikaController {
    @RequestMapping(method = RequestMethod.OPTIONS)
    ResponseEntity<?> options() {
        return ResponseEntity
                .ok()
                .allow(HttpMethod.GET, HttpMethod.POST, HttpMethod.DELETE)
                .build();
    }
    private final SlikaRepository slikaRepository;
    @PostMapping("/file/uploadImage")
    @ResponseBody
    public String uploadImage(@RequestParam(value = "image") MultipartFile file) {

        String fileName = file.getOriginalFilename();
            Slika uploadFile = new Slika();
            uploadFile.setName(fileName);
            try {
                uploadFile.setContent(new Binary(file.getBytes()));
            } catch (IOException e) {
                e.printStackTrace();
            }
            uploadFile.setContentType(file.getContentType());
            uploadFile.setSize(file.getSize());

            Slika savedFile = slikaRepository.save(uploadFile);
            String url = "http://localhost:8080/file/image/" + savedFile.getId();
            return savedFile.getId();
    }

}
