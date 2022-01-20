package com.twitter.fs14.dto.user;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UserDto {
  private String firstName;
  private String lastName;
}
