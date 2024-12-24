package com.HarvestHub.HarvestHub.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {
    

    @PostMapping("/register")
    public ResponseEntity registerUser(){
        
        return ResponseEntity.ok("User Registered Successfully!");
    }

}
