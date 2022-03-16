import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {/* <Route path='/' exact component={WarehouseList} />
                <Route path='/warehouse/:warehouseId' component={WarehouseDetails} />
                <Route path='/inventory' exact component={InventoryList} />
                <Route path='/inventory/:inventoryId' component={InventoryItemDetails} /> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
