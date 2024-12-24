package com.HarvestHub.HarvestHub.Controller;


import com.HarvestHub.HarvestHub.Entities.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @GetMapping("/get_latest_offer_product")
    public List getLatestOffer(){
        return List.of(
                new Product(1010,"DairyMilk",500,"15"),
                new Product(1010,"DairyMilk",100,"10"),
                new Product(1020,"Kitkat",300,"50"),
                new Product(1030,"Kurkure",100,"22"),
                new Product(1040,"Chips",123,"66"),
                new Product(1050,"Wheels",234,"11"),
                new Product(1060,"Melody",211,"88"),
                new Product(1060,"chrucheks",41,"28"),
                new Product(1060,"Rings",211,"97"),
                new Product(1060,"SoyaSticks",211,"23"),
                new Product(1060,"santargolya",21,"23"),
                new Product(1060,"popins",211,"28")
        );
    }
}
