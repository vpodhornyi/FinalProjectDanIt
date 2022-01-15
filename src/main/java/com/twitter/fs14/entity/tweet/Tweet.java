package com.twitter.fs14.entity.tweet;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.reply.Reply;
import com.twitter.fs14.entity.user.User;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tweet")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tweet extends BaseEntity {
    private String body;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @LazyCollection(LazyCollectionOption.EXTRA)
    @ManyToOne
    @JoinTable(name = "tweets_children",
            joinColumns = @JoinColumn(name = "parentTweet"),
            inverseJoinColumns = @JoinColumn(name = "childTweet"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Tweet parentTweet;


    @LazyCollection(LazyCollectionOption.EXTRA)
    @OneToMany
    @JoinTable(name = "tweets_children",
            joinColumns = @JoinColumn(name = "childTweet"),
            inverseJoinColumns = @JoinColumn(name = "parentTweet"))
    private Set<Tweet> childTweet;

    @LazyCollection(LazyCollectionOption.EXTRA)
    @OneToMany
    private Set<Reply> reply;

    @JsonIgnore
    @ManyToOne
    @JoinTable(name = "bookmarks",
            joinColumns = @JoinColumn(name = "tweet"),
            inverseJoinColumns = @JoinColumn(name = "user"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Tweet bookmark;

    @JsonIgnore
    @ManyToOne
    @JoinTable(name = "likes",
            joinColumns = @JoinColumn(name = "tweet"),
            inverseJoinColumns = @JoinColumn(name = "user"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Tweet like;

}
