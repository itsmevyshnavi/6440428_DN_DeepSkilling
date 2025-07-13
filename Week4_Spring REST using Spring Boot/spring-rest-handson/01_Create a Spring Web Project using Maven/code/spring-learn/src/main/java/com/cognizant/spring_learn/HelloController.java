package com.cognizant.springlearn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Vyshnavi!";
    }

    @GetMapping("/course")
    public Map<String, Object> getCourse() {
        Map<String, Object> course = new HashMap<>();
        course.put("id", 1);
        course.put("name", "Spring Boot Basics");
        course.put("duration", "4 weeks");
        return course;
    }
}
