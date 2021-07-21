import {Container  } from 'react-bootstrap'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
    <Header />
      <main className="py-2">
        <Container>
          <HomeScreen />
          </Container>
    </main>
      <Footer />
      </div>
  );
}

export default App;