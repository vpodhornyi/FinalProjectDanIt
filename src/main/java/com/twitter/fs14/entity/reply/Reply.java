package com.twitter.fs14.entity.reply;

import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.tweet.Tweet;
import com.twitter.fs14.entity.user.User;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "reply")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reply extends BaseEntity {
    private String body;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Tweet tweet;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
}
