import 'bootstrap/dist/css/bootstrap.css';
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer"
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {CartContextComponent} from './context/CartContext';
import { CartComponent } from './components/Cart';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <CartContextComponent>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
              <Switch>
                <Route exact path="/" component={ItemListContainer}/>
                <Route path="/category/:id" component={ItemListContainer}/>
                <Route path="/item/:id" component={ItemDetailContainer}/>
                <Route path="/cart" component={CartComponent}/>
            </Switch>   
        </BrowserRouter>
      </CartContextComponent>
      <Footer/>
    </div>
  );
}

export default App;
