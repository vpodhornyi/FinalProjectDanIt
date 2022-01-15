package com.twitter.fs14.entity.atachment;

import com.twitter.fs14.entity.BaseEntity;
import com.twitter.fs14.entity.tweet.Tweet;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "attachment")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Attachment extends BaseEntity {
    private AttachmentType type;
    private String url;

    @ManyToOne
    @JoinColumn(name = "tweet_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Tweet tweet;
}
