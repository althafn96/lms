import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { BatchHttpLink } from "apollo-link-batch-http"

const httpOptions = {
    // uri: 'https://deliveryme.today/public/graphql'
    // uri: 'https://learners.deliveryme.today/graphql'
    // uri: 'https://tamiledu.deliveryme.today/graphql'
    uri: 'http://lms.test/graphql'
}

// HTTP connection to the API
const httpLink = ApolloLink.split(
    operation => operation.getContext().hasUpload,
    createUploadLink(httpOptions),
    new BatchHttpLink(httpOptions)
)

const errorLink = onError(error => {
    if (process.env.NODE_ENV !== 'production') {
        // console.log(error.graphQLErrors[0].message)
    }
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache,
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
    },
    credentials: 'include'
})

export default apolloClient
