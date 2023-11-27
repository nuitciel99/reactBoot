import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Routers from './components/Routers';
import Contents from './components/Contents';
// import Footer from './components/Footer';

function App() {
  return ( 
    <div className="App">
      <Header />
      {/* <Routers /> */}
      <Contents />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
