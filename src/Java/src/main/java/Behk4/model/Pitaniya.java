package Behk4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Behk4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Питания
 */
@Entity(name = "IISBehk4Питания")
@Table(schema = "public", name = "Питания")
public class Pitaniya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодПитания")
    private Integer кодпитания;

    @Column(name = "ВидПитания")
    private String видпитания;

    @OneToMany(mappedBy = "pitaniya", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavBlyuda> sostavblyudas;


    public Pitaniya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодПитания() {
      return кодпитания;
    }

    public void setКодПитания(Integer кодпитания) {
      this.кодпитания = кодпитания;
    }

    public String getВидПитания() {
      return видпитания;
    }

    public void setВидПитания(String видпитания) {
      this.видпитания = видпитания;
    }


}