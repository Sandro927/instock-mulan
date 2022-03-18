import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Warehouses from './pages/Warehouses/Warehouses';
import AddItem from './pages/AddItem/AddItem';
import InventoryItemDetails from './Components/InventoryItemDetails/InventoryItemDetails';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/warehouses' exact component={Warehouses} />
                {/* <Route path='/warehouse/:warehouseId' component={WarehouseDetails} />
                <Route path='/inventory' exact component={InventoryList} />
                <Route path='/inventory/:itemId' component={InventoryItemDetails} />  */}
                <Route path='/inventory/:itemId/edit' component={AddItem} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
