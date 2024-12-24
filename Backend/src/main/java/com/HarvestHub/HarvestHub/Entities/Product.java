package com.HarvestHub.HarvestHub.Entities;


public class Product{
    private Integer id;
    private  String name;
    private Integer price;
    private String offer_in_percent;
//    private String owner_name;
//    private Integer owner_id;

    public Product(){
    }

    public Product(Integer id, String name, Integer price, String offer_in_percent) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.offer_in_percent = offer_in_percent;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getOffer_in_percent() {
        return offer_in_percent;
    }

    public void setOffer_in_percent(String offer_in_percent) {
        this.offer_in_percent = offer_in_percent;
    }
}