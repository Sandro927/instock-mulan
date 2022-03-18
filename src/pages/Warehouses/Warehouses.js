import React, { Component } from "react";
import "./Warehouses.scss";
import axios from "axios";
import WarehouseTable from "../../Components/WarehouseTable/WarehouseTable";

export default class Warehouses extends Component {
  state = {
    warehouses: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/warehouses")
      .then((res) => {
        this.setState({ warehouses: res.data });
      })
      .catch((err) => console.error);
  }

  render() {
    return (
      <section className="warehouses">
        <div className="warehouses__content">
          <div className="warehouses__header">
            <h1 className="warehouses__title">Warehouses</h1>
            <div className="warehouses__options">
              <form className="warehouses__form">
                <input
                  type="text"
                  placeholder="Search..."
                  className="warehouses__search"
                />
              </form>
              <button className="warehouses__button">
                + Add a New Warehouse
              </button>
            </div>
          </div>
          {this.state.warehouses && (
            <WarehouseTable warehouses={this.state.warehouses} />
          )}
        </div>
      </section>
    );
  }
}


