package com.twitter.fs14.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.chat.Chat;
import com.twitter.fs14.entity.chat.Message;
import com.twitter.fs14.entity.notification.Notification;
import com.twitter.fs14.entity.reply.Reply;
import com.twitter.fs14.entity.tweet.Tweet;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "user")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {
    private String firstName;
    private String lastName;
    private String location;
    private LocalDate birthdate;
    private String bio;
    private String website;
    private String avatarUrl;
    private String backgroundImageUrl;


    @LazyCollection(LazyCollectionOption.EXTRA)
    @ManyToMany
    @JoinTable(name = "followers",
            joinColumns = @JoinColumn(name = "userWhoId"),
            inverseJoinColumns = @JoinColumn(name = "userWhomId"))
    @JsonIgnore
    private Set<User> followers;


    @LazyCollection(LazyCollectionOption.EXTRA)
    @ManyToMany
    @JoinTable(name = "followers",
            joinColumns = @JoinColumn(name = "userWhomId"),
            inverseJoinColumns = @JoinColumn(name = "userWhoId"))
    @JsonIgnore
    private Set<User> followings;
    
    @JsonIgnore
    @OneToMany(mappedBy = "sender", fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Message> messages;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    private Set<Notification> notifications;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    private Set<Tweet> tweets;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    private List<Chat> chats;

    @JsonIgnore
    @OneToMany
    private List<Reply> replies;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "bookmarks",
            joinColumns = @JoinColumn(name = "user"),
            inverseJoinColumns = @JoinColumn(name = "tweet"))
    private Set<Tweet> bookmarks;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "likes",
            joinColumns = @JoinColumn(name = "user"),
            inverseJoinColumns = @JoinColumn(name = "tweet"))
    private Set<Tweet> likes;
}
