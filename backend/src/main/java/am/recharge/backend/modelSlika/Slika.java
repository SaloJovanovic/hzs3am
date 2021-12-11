package am.recharge.backend.modelSlika;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
public class Slika {

    @Id
    private String id;
    private String name; // file name
    private Binary content; // file content
    private String contenttype; // file type
    private long size; // file size

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Binary getContent() {
        return content;
    }

    public void setContent(Binary content) {
        this.content = content;
    }

    public String getContentType() {
        return contenttype;
    }

    public void setContentType(String contenttype) {
        this.contenttype = contenttype;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
// getter/setter

}