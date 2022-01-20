package com.twitter.fs14.repository.user;

import com.twitter.fs14.entity.user.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository
@Transactional
public class UserRepository {
  private final EntityManager em;

  public UserRepository(EntityManager entityManager) {
    this.em = entityManager;
  }

  public void save(User user) {
    em.persist(user);
  }

  public User findById(Long id) {
    return em.createQuery("from User where id=:id", User.class)
        .setParameter("id", id)
        .getSingleResult();
  }
}
