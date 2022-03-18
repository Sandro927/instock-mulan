import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/warehouses" exact component={Warehouses} />
        <Route
          path="/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0"
          component={WarehouseDetails}
        />
        {/* <Route path='/inventory' exact component={InventoryList} />
                <Route path='/inventory/:inventoryId' component={InventoryItemDetails} />   */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
