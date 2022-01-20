package com.twitter.fs14.service;

import com.twitter.fs14.entity.user.User;
import com.twitter.fs14.repository.user.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepositoryImpl) {
    this.userRepository = userRepositoryImpl;
  }

  public void saveUser(User user) {
    userRepository.save(user);
  }

  public User getUserById(long id) {
    return userRepository.findById(id);
  }
}
