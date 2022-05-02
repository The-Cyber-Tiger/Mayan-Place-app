import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Heaven from './components/Heaven/Heaven';
import Home from './components/Home/Home'
import Magic from './components/Magic/Magic';
import Match from './components/Match/Match';
    //  -HOME
    //  -Enter2dHeaven
    //  -MATCH
    //  -WeHaveaPlace
    //  -OurMagicPlaces
function App() {
  return (
    <div>
      <Home/>
      <Heaven/>
      <Match/>
      <Banner/>
      <Magic/>
      <Footer/>
    </div>
  );
}

export default App;
