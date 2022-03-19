import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import AddItem from './pages/AddItem/AddItem';
import InventoryItemDetails from './Components/InventoryItemDetails/InventoryItemDetails'; 
import AddWarehouse from './pages/AddWarehouse/AddWarehouse';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/warehouses' exact component={Warehouses} />
                {/* <Route path='/warehouses/:warehouseId' component={WarehouseDetails} /> */}
                <Route path='/warehouses/add' component={AddWarehouse} />
                <Route path='/inventory' exact component={Inventory} />
                <Route path='/inventory/:inventoryId' component={InventoryItemDetails} /> 
                <Route path='/inventories/add' component={AddItem} />
                {/* <Route path='/inventories/:itemId/edit' component={AddItem} /> */}
                {/* <Route path='/inventory/:itemId/edit'  /> */}
                
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
