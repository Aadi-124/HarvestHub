package com.HarvestHub.HarvestHub.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @GetMapping("/test")
    public String Test(){
        System.out.println("Request is made from frontend!");
        return "API Accessed Successfully!";
    }


}
