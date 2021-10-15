import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomePage from './pages/HomePage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

// apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <SiteHeader />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/details/:id" component={ReviewDetails} />
            <Route path="/category/:id" component={Category} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider> 
    
  );
}

export default App;
