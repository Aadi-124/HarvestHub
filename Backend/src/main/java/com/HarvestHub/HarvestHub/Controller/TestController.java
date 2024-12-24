package com.HarvestHub.HarvestHub.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HarvestHub.HarvestHub.Entities.SampleEntity;
import com.HarvestHub.HarvestHub.Repository.SampleRepository;


@RestController
@RequestMapping("/test")
public class TestController {
    
    private SampleRepository repository;

    public TestController(SampleRepository repository) {
        this.repository = repository;
    }
    

    @GetMapping("/")
    public String Test(){
        System.out.println("Request is made from frontend!");
        return "API Accessed Successfully!";
    }

    @GetMapping("/DBtest_getmapping")
    public List DBTestingGet(){
        if(repository.findAll() == null){
            return null;
        } else {
            return repository.findAll();
        }
    }

    @PostMapping("/DBtest_postmapping")
    public ResponseEntity DBTestingPost(){
        return ResponseEntity.ok(repository.save(new SampleEntity(1, "Test")));
    }

}
