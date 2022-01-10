package com.twitter.fs14.entity.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.user.User;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "chat")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chat extends BaseEntity {
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "chat", fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Message> messages;

    @ManyToMany
    @JoinTable(name = "users_to_chats",
            joinColumns = @JoinColumn(name = "chat_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    @JsonIgnore
    private List<User> users;
}
