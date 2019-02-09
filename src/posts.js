const firstPost = {
  title: 'Expected type variable to be an object using Apollo',
  author: {
    name: 'gregoryforel',
    avatar: 'https://www.prisma.io/forum/user_avatar/www.prisma.io/jonathan.graf/90/1994_1.png'
  },
  meta: {
    likes: 21,
    comments: 34,
    isAnswered: true,
    isPopular: true,
    tags: ['apollo', 'prisma-client-1.25', 'querying'],
    createdAt: 20190204
  },
  content: `
Hi all!

I have a working query in GraphQL Playground that I’m trying to get to work using Apollo. I can’t seem to pass a variable properly to the query.

Here’s my code:
\`\`\`javascript
public render() {
  const CONVERSATION = gql\`
    query GetConversation(
      $conversationId: ConversationWhereUniqueInput!
    ) {
      conversation(where: $conversationId) {
        id
        title
      }
    }
    \`
  const conversationId: any = this.props.conversation
  console.log(conversationId) // works.

  return (
    <ApolloProvider client={this.client}>
      <div>
        <Query query={CONVERSATION} variables={{ conversationId }}>
          {({ loading, error, data }) => {
            if (error) {
              return <div>\${JSON.stringify(error)}</div>
            }
            if (loading) {
              return <div>Loading...</div>
            }
            return <div>{JSON.stringify(data)}</div>
          }}
        </Query>
      </div>
    </ApolloProvider>
  )
}
\`\`\`
`}

const secondPost = {
  title: 'Relation modal doesn\'t allow selecting entries',
  author: {
    name: 'juliansthl',
    avatar: 'https://avatars0.githubusercontent.com/u/7814840?s=88&v=4'
  },
  meta: {
    likes: 7,
    comments: 2,
    isAnswered: false,
    isPopular: false,
    tags: ['prisma-admin', 'problem'],
    createdAt: 20190204
  },
  content: `When opening the modal for a relation field, it says that one entry is connected (which is correct) although none of the checkboxes is selected (which should not be the case).

  When clicking on a checkbox it does not get selected so it is also not possible to select multiple items.`,
  link: {
    image: 'https://avatars3.githubusercontent.com/u/17219288?s=400&v=4',
    title: 'prisma/prisma-admin-feedback',
    description: 'Feedback for Prisma Admin (currently in invite-only preview) - prisma/prisma-admin-feedback',
    site: 'github.com',
  }
}

const thirdPost = {
  title: 'Nested Fragments not functioning as expected',
  author: {
    name: 'ericweissmann',
    avatar: 'https://www.prisma.io/forum/user_avatar/www.prisma.io/ericweissmann/90/1990_1.png'
  },
  meta: {
    likes: 2,
    comments: 9,
    isAnswered: true,
    isPopular: false,
    tags: ['prisma-admin', 'problem'],
    createdAt: 20190204
  },
  content: `
I have a schema with an array of another type (here’s a simplified version):

\`\`\`graphql
type Parent {
  name: String!
  id: ID!
  children: [Child!]!
}

type Child {
  id: ID!
  nickname: String!
  grade: Int!
}
\`\`\`
`}

const fourthPost = {
  title: 'Get the data type of a node with a given ID?',
  author: {
    name: 'colinmcd94',
    avatar: 'https://www.prisma.io/forum/letter_avatar_proxy/v2/letter/c/3ec8ea/90.png'
  },
  meta: {
    likes: 1,
    comments: 4,
    isAnswered: false,
    isPopular: false,
    tags: ['prisma-admin', 'problem'],
    createdAt: 20190204
  },
  content: `I want to implement a permissions/sharing system that is type-agnostic. Basically a user can specify a list of IDs and share access to all of those entities with another user. To do so, I’m trying to determine the type of each entity (given it’s ID). Is this possible?`
}

export default [
  firstPost,
  secondPost,
  thirdPost,
  fourthPost
]