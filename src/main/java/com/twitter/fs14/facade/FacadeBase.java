package com.twitter.fs14.facade;

import org.modelmapper.ModelMapper;

public abstract class FacadeBase {
  private final ModelMapper modelMapper;

  public FacadeBase() {
    this.modelMapper = new ModelMapper();
  }

  public ModelMapper getModelMapper() {
    return modelMapper;
  }
}
