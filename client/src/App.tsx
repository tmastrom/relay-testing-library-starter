import React from 'react';
import logo from './logo.svg';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

const { useState, useEffect } = React;

function App() {
// We'll load the name of a repository, initially setting it to null
const [query, setQuery] = useState(null);

// When the component mounts we'll fetch a repository name
useEffect(() => {
  let isMounted = true;
  fetchGraphQL(`
  query MyQuery {
    query {
      allTodos {
        edges {
          node {
            id
            dateUpdated
            dateCreated
            completed
            task
          }
        }
      }
    }
  }
  `).then(response => {
    // Avoid updating state if the component unmounted before the fetch completes
    if (!isMounted) {
      return;
    }
    const data = response.data;
    setQuery(data);
    console.log('data is',data)
  }).catch(error => {
    console.error(error);
  });

  return () => {
    isMounted = false;
  };
}, []);

// Render "Loading" until the query completes
return (
  <div className="App">
    <header className="App-header">
      <p>
        {query != null ? `Query: ${JSON.stringify(query)}` : "Loading"}
      </p>
    </header>
  </div>
);
}

export default App;
