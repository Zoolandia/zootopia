package org.factoriaf5.zootopia.controllers;

import org.factoriaf5.zootopia.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping(path = "/users")
    public User index(){
        User jesus = new User("Jesus","12345678");
        return jesus;
    }
}
