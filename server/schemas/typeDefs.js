const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: Int
        title: String
    }

    input InputBook {
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String! ,email: String!, password: String!): Auth
        saveBook(newBook: InputBook): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;