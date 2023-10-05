import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RandomBeer from './pages/RandomBeer';
import AddBeer from './pages/AddBeer';
import AllBeers from './pages/AllBeers';
import Header from './components/Header';
import BeerDetails from './pages/BeerDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      {/* <NavBar /> */}
      <Header  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}
export default App;