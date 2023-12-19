package DestkijjSad.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import DestkijjSad.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагенты
 */
@Entity(name = "IISDestkijjSadКонтрагенты")
@Table(schema = "public", name = "Контрагенты")
public class Kontragenty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКонтиагента")
    private Integer кодконтиагента;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Вид")
    private String вид;


    public Kontragenty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКонтиагента() {
      return кодконтиагента;
    }

    public void setКодКонтиагента(Integer кодконтиагента) {
      this.кодконтиагента = кодконтиагента;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getВид() {
      return вид;
    }

    public void setВид(String вид) {
      this.вид = вид;
    }


}