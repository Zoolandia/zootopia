package org.factoriaf5.zootopia.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping(path = "/users")
    public String index(){
        return "Hello";
    }
}
