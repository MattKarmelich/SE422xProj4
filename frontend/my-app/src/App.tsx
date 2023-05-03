import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForSale from './pages/ForSale';
import Housing from './pages/Housing';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Implement login functionality
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/forsale" component={ForSale} />
        <Route path="/housing" component={Housing} />
        <Route path="/services" component={Services} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/community" component={Community} />
      </Switch>
    </Router>
  );
};

export default App;
