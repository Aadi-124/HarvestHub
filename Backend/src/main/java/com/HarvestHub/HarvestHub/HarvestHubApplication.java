package com.HarvestHub.HarvestHub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class HarvestHubApplication {

	public static void main(String[] args) {
		SpringApplication.run(HarvestHubApplication.class, args);
	}

	@Bean
	WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**")
				.allowedMethods("*")
				.allowedOrigins("*")
				.allowedHeaders("*");
			}
		};
	}

}
