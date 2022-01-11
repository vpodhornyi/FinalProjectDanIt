package com.twitter.fs14.entity.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.user.User;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "message")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message extends BaseEntity {
    private String body;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    private User sender;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_id")
    private Chat chat;
}
