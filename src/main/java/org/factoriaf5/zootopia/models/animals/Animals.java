package org.factoriaf5.zootopia.models.animals;

import jakarta.persistence.*;
import org.factoriaf5.zootopia.models.continents.Continents;
import org.factoriaf5.zootopia.models.families.Families;

import java.util.Date;

@Entity
@Table(name = "animals")
public class Animals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private  String gender;

    @ManyToOne
    @JoinColumn(name = "continents_id")
    private Continents continents;

    private Date date;
    private String imgUrl;

    @ManyToOne
    @JoinColumn(name = "families_id")
    private Families families;

    public Animals(Long id, String name, String type, String gender, Continents continents, Date date, String imgUrl, Families families) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.continents = continents;
        this.date = date;
        this.imgUrl = imgUrl;
        this.families = families;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Continents getContinents() {
        return continents;
    }

    public void setContinents(Continents continents) {
        this.continents = continents;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Families getFamilies() {
        return families;
    }

    public void setFamilies(Families families) {
        this.families = families;
    }
}
