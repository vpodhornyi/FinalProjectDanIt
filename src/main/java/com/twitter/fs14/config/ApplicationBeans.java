package com.twitter.fs14.config;

import com.twitter.fs14.facade.FacadeBase;
import com.twitter.fs14.facade.UserFacade;
import com.twitter.fs14.repository.user.UserRepository;
import com.twitter.fs14.service.UserService;
import org.h2.tools.Server;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.persistence.EntityManager;

@Configuration
public class ApplicationBeans {
  @Bean
  public ModelMapper modelMapper() {
    ModelMapper mm = new ModelMapper();
    mm.getConfiguration().setFieldMatchingEnabled(true).setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE);
    return mm;
  }

  @Profile("local")
  @Bean
  Server h2Server() {
    Server server = new Server();
    try {
      server.runTool("-tcp");
      server.runTool("-tcpAllowOthers");
    } catch (Exception e) {
      e.printStackTrace();
    }
    return server;
  }
}
