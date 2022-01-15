package com.twitter.fs14.entity.notification;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.user.User;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "notification")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification extends BaseEntity {
    private String body;
    private NotificationType type;
    private boolean isReaded;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
}