import React from 'react';
import BookList from "./components/BookList";
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client'

// Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Ninja Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
