import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import Prism from 'prismjs'
import ReactMarkdown from 'react-markdown'

// Locals
import HeartIcon from '../vectors/heart'
import CommentIcon from '../vectors/comment'
import CheckIcon from '../vectors/check'
import FlameIcon from '../vectors/flame'
import posts from '../posts'

// Thread
const Thread = ({ post, isExpanded }) => {
  const [isTemporaryExpanded, setTemporaryExpanded] = useState(isExpanded)

  const handleThreadClick = () => {
    if (isExpanded === false) { setTemporaryExpanded(true) }
    else { console.log('boo') }
  }

  return (
    <ThreadContainer
      isExpanded={isExpanded || isTemporaryExpanded}
      onClick={() => handleThreadClick()}>
      <ThreadHeader>
        <ThreadHeaderLeft>
          <ThreadAuthorAvatar src={post.author.avatar} />
          <ThreadAuthor>{post.author.name}</ThreadAuthor>
          <ThreadDate>4 days ago</ThreadDate>
        </ThreadHeaderLeft>
        <ThreadHeaderRight>
          <ThreadIcons>
            {post.meta.isAnswered && <ThreadIcon color='green'><CheckIcon/></ThreadIcon>}
            {post.meta.isPopular && <ThreadIcon color='orange'><FlameIcon/></ThreadIcon>}
          </ThreadIcons>
          <ThreadLikes><HeartIcon/>{post.meta.likes}</ThreadLikes>
          <ThreadComments><CommentIcon/>{post.meta.comments}</ThreadComments>
        </ThreadHeaderRight>
      </ThreadHeader>
      <ThreadTitle>{post.title}</ThreadTitle>
      { post.meta.tags &&
        <ThreadTags>
        { post.meta.tags.map((tag, i) => <ThreadTag key={i}>#{tag}</ThreadTag>) }
        </ThreadTags>
      }
      <ThreadBody isExpanded={isExpanded || isTemporaryExpanded}>
        <ReactMarkdown source={post.content} />
      </ThreadBody>
      { post.link &&
        <ThreadLink>
          <ThreadLinkImage src={post.link.image} />
          <ThreadLinkOverview>
            <ThreadLinkTitle>{post.link.title}</ThreadLinkTitle>
            <ThreadLinkDescription>{post.link.description}</ThreadLinkDescription>
            <ThreadLinkSite>{post.link.site}</ThreadLinkSite>
          </ThreadLinkOverview>
        </ThreadLink>
      }
    </ThreadContainer>
  )
}

// Threads
const Threads = ({ isExpanded }) => {
  useEffect(() => { Prism.highlightAll() })

  return (
    <Wrapper>
      { posts.map((post, i) => <Thread key={i} isExpanded={isExpanded} post={post} />) }
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div``

const ThreadContainer = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: 0 3px 6px 0 ${p => transparentize(0.925, p.theme.darkGray1)};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: ${p => p.isExpanded ? '32px' : '16px'};

  &:hover { cursor: pointer; }
`

const ThreadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`

const ThreadHeaderLeft = styled.div`
  display: flex;
`

const ThreadHeaderRight = styled.div`
  display: flex;
  align-items: center;
`

const ThreadAuthorAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 8px;
`

const ThreadAuthor = styled.div`
  margin-right: 8px;
  &:hover { text-decoration: underline; }
`

const ThreadDate = styled.div`
  color: ${p => p.theme.gray};
`

const ThreadLikes = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    display: block;
    margin-right: 6px;
  }
`

const ThreadComments = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  align-items: center;

  svg {
    display: block;
    margin-right: 6px;
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
  margin-right: 20px;

  &:hover {
    ${ThreadIcon} { margin-left: 4px; }
  }
`

const ThreadTitle = styled.div`
  font-size: 20px;
  margin: 20px;
  /* font-family: ${p => p.theme.titleFont}; */
  font-weight: 600;
`

const ThreadTags = styled.div`
  display: flex;
  margin: -12px 20px 20px 20px;
`

const ThreadTag = styled.div`
  color: ${p => p.theme.gray};
  margin-right: 12px;
  &:hover { text-decoration: underline; }
`

const ThreadBody = styled.div`
  margin: 20px;
  font-size: 16px;
  line-height: 24px;

  p {
    margin: ${p => p.isExpanded ? '16px 0' : '0'};
    display: ${p => p.isExpanded ? 'block' : 'inline'};
  }

  ${ p => !p.isExpanded && `
    p + p:before {
      content: '↩';
      position: relative;
      top: 1px;
      padding: 0 6px;
      font-size: 14px;
      color: ${p.theme.gray};
    }
  `}

  pre {
    position: relative;
    background-color: ${p => p.theme.lightGray1};
    padding: 20px 24px;
    margin: 24px -24px -24px -24px;
    max-height: ${p => p.isExpanded ? 'none' : '150px'};
    overflow: hidden;

    ${ p => !p.isExpanded && `
      &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background-image: linear-gradient(${transparentize(1, p.theme.lightGray1)} 0%, ${p.theme.lightGray1} 100%);
      }
    `}
  }
`

const ThreadLinkTitle = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`

const ThreadLink = styled.div`
  transition: background-color 0.1s ease;
  display: flex;
  margin: 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.lightGray1};
  padding: 16px;

  &:hover {
    ${ThreadLinkTitle} { text-decoration: underline; }
  }
`

const ThreadLinkImage  = styled.img`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
`

const ThreadLinkOverview = styled.div``

const ThreadLinkDescription = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`

const ThreadLinkSite = styled.div`
  font-size: 14px;
  color: ${p => p.theme.gray};
`


export default Threads