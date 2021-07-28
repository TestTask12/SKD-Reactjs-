import {Container  } from 'react-bootstrap'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
//import Rating from  '..components/Rating'

function App() {
  return (
    <Router>
    <Header />
      <main className="py-2">
        <Container>
          < Route path="/" component={HomeScreen} exact />
          < Route  path="/product/:id"component={ProductScreen} exact />
          </Container>
    </main>
     
      </Router>
  );
}

export default App;
