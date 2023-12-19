package DestkijjSad.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import DestkijjSad.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставБлюда
 */
@Entity(name = "IISDestkijjSadСоставБлюда")
@Table(schema = "public", name = "СоставБлюда")
public class SostavBlyuda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Единицы")
    private String единицы;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ingredienty")
    @Convert("Ingredienty")
    @Column(name = "Ингредиенты", length = 16, unique = true, nullable = false)
    private UUID _ingredientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ingredienty", insertable = false, updatable = false)
    private Ingredienty ingredienty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Pitaniya")
    @Convert("Pitaniya")
    @Column(name = "Питания", length = 16, unique = true, nullable = false)
    private UUID _pitaniyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Pitaniya", insertable = false, updatable = false)
    private Pitaniya pitaniya;


    public SostavBlyuda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public String getЕдиницы() {
      return единицы;
    }

    public void setЕдиницы(String единицы) {
      this.единицы = единицы;
    }


}