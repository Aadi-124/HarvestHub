package com.HarvestHub.HarvestHub.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Users {

    @Id
    private Integer id;
    private String name;
    private String email;
    private String password;
    private String dob;
    private String role;
    private String phone;
    private String address;
    private String created_at;
    private String is_email_verified;
    private String profile_picture_url;


    public Users() {
    }   

    public Users(Integer id, String name, String email, String password, String role, String dob, String phone, String address, String created_at, String is_email_verified, String profile_picture_url) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.role = role;
        this.phone = phone;
        this.address = address;
        this.created_at = created_at;
        this.is_email_verified = is_email_verified;
        this.profile_picture_url = profile_picture_url;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }              
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getDob() {
        return this.dob;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }
    public String getRole() {
        return this.role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getPhone() {
        return this.phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddress() {
        return this.address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getCreated_at() {
        return this.created_at;
    }
    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }
    public String getIs_email_verified() {
        return this.is_email_verified;
    }
    public void setIs_email_verified(String is_email_verified) {
        this.is_email_verified = is_email_verified;
    }
    public String getProfile_picture_url() {
        return this.profile_picture_url;
    }
    public void setProfile_picture_url(String profile_picture_url) {
        this.profile_picture_url = profile_picture_url;
    }


}
