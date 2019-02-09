import React, { useState } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

// Locals
import HeartIcon from '../vectors/heart'
import CommentIcon from '../vectors/comment'
import CheckIcon from '../vectors/check'
import FlameIcon from '../vectors/flame'
import posts from '../posts'

// Thread
const Thread = ({ post }) => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <ThreadContainer onClick={() => setExpanded(!isExpanded)}>
      <ThreadTitle>{post.title}</ThreadTitle>
      <ThreadFooter>
        <ThreadFooterLeft>
          <ThreadAuthorAvatar src={post.author.avatar} />
          { post.meta.tags &&
            <ThreadTags>
              { post.meta.tags.map((tag, i) => <ThreadTag key={i}>#{tag}</ThreadTag>) }
            </ThreadTags>
          }
        </ThreadFooterLeft>
        <ThreadFooterRight>
          <ThreadIcons>
            {post.meta.isAnswered && <ThreadIcon color='green'><CheckIcon/></ThreadIcon>}
            {post.meta.isPopular && <ThreadIcon color='orange'><FlameIcon/></ThreadIcon>}
          </ThreadIcons>
          <ThreadLikes><HeartIcon/>{post.meta.likes}</ThreadLikes>
          <ThreadComments><CommentIcon/>{post.meta.comments}</ThreadComments>
        </ThreadFooterRight>
      </ThreadFooter>
    </ThreadContainer>
  )
}

// Threads Compact
const ThreadsCompact = () => {
  return (
    <Wrapper>
      { posts.map((post, i) => <Thread key={i} post={post} />) }
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div``

const ThreadContainer = styled.div`
  width: 100%;
  background-color: ${p => p.theme.white};
  box-shadow: 0 3px 6px 0 ${p => transparentize(0.925, p.theme.darkGray1)};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;

  &:hover {
    cursor: pointer;
  }
`

const ThreadAuthorAvatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 8px;
`

const ThreadLikes = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  align-items: center;
  margin-right: 16px;

  svg {
    color: ${p => p.theme.lightGray3};
    display: block;
    margin-right: 4px;
  }
`

const ThreadComments = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  align-items: center;

  svg {
    color: ${p => p.theme.lightGray3};
    display: block;
    margin-right: 4px;
  }
`

const ThreadIcon = styled.div`
  transition: margin 0.1s ease;
  display: flex;
  margin-left: -8px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  color: ${p => p.theme.white};
  background-color: ${
    p => p.color === 'green'
    ? p.theme.green
    : p.color === 'orange'
      ? p.theme.orange
      : 'transparent'
  };

  svg {
    display: block;
    margin: auto;
  }
`

const ThreadIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  &:hover {
    ${ThreadIcon} { margin-left: 4px; }
    ${ThreadAuthorAvatar} { margin-left: 4px; }
  }
`

const ThreadTitle = styled.div`
  font-size: 18px;
  margin: 20px 20px 12px 20px;
  font-weight: 600;
`

const ThreadFooter = styled.div`
  padding: 0 24px 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ThreadFooterLeft = styled.div`
  display: flex;
`

const ThreadFooterRight = styled.div`
  display: flex;
  align-items: center;
`

const ThreadTags = styled.div``

const ThreadTag = styled.span`
  color: ${p => p.theme.gray};
  margin-right: 12px;
  &:hover { text-decoration: underline; }
`

export default ThreadsCompact