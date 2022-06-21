import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4orlwte0vuy01xse99n8w9j/master',
    cache: new InMemoryCache()
})