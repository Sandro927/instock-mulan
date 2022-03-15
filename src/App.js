import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
  
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
