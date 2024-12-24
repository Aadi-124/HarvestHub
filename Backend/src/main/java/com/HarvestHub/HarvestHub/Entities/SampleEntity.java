package com.HarvestHub.HarvestHub.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Sample")
public class SampleEntity {
    
    @Id
    private Integer id;
    private String name;


    public SampleEntity(int id, String name) {
        this.id = id;
        this.name = name;
    }
    public SampleEntity() {
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }    

    
}
