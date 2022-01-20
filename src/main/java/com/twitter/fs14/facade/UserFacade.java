package com.twitter.fs14.facade;

import com.twitter.fs14.dto.user.UserDto;
import com.twitter.fs14.entity.user.User;
import com.twitter.fs14.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class UserFacade extends FacadeBase {
  private final UserService userService;

  public UserFacade(UserService userService) {
    super();
    this.userService = userService;
  }

  public void saveUser(User user) {
    userService.saveUser(user);
  }

  public UserDto getUserById(long id) {
    User user = userService.getUserById(id);
    return getModelMapper().map(user, UserDto.class);
  }
}
