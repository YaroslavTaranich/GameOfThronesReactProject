import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        const {pageNumber} = this.props;
        return arr.map((item, i) => {
            // const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected((pageNumber - 1) * 10 + 1 + i)}
                    >
                        {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {return <Spinner/>}

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}