package com.twitter.fs14.controller;

import com.twitter.fs14.dto.user.UserDto;
import com.twitter.fs14.entity.user.User;
import com.twitter.fs14.facade.UserFacade;;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
  private final UserFacade userFacade;

  public UserController(UserFacade userFacade) {
    this.userFacade = userFacade;
  }

  @PostMapping
  public void saveUser(@RequestBody User user) {
    userFacade.saveUser(user);
  }

  @GetMapping("/{id}")
  public UserDto getUserById(@PathVariable("id") long id) {
    return userFacade.getUserById(id);
  }
}
