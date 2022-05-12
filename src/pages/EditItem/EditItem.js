import React from 'react';
import './EditItem.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ItemForm from '../../Components/ItemForm/ItemForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditItem extends React.Component {


    state = {
        itemData: null 
    }

    componentDidMount() {
        axios.get(`https://instock-mulan.herokuapp.com/inventory/${this.props.match.params.id}`)
            .then(res => {
                this.setState({itemData: res.data})
            })
            .catch(err => {
                console.log(err);
            }
        );
    }


    render() {
        return (
            <section className="edit-item">
                <div className="edit-item__content">
                    <div className="edit-item__header">
                      <Link to="/inventory" className='edit-item__link'>
                        <img src={BackArrow} alt="Back Arrow Icon" />
                      </Link>
                      <h1 className="edit-item__title">Edit Inventory Item</h1>   
                    </div>{ this.state.itemData && 
                        <ItemForm itemId={this.props.match.params.id} itemData={this.state.itemData} />
                    }
                   
                </div>
            </section>
        )
    }
}

export default EditItem