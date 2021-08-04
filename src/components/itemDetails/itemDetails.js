import React, {Component} from 'react';
import './itemDetails.css';
import GotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}


export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        content: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }


    updateItem() {
        const {itemId} = this.props;
        if (!itemId) {return};

        const itemPromise = () => {
            const {itemId, content} = this.props;
            if (content === 'char') {
                return this.gotService.getCharater(itemId);
             }
             if (content === 'house') {
                return this.gotService.getHouse(itemId)
             }
             if (content === 'book') {
                return this.gotService.getBook(itemId)
             }
        }

            itemPromise().then((item) => {
                this.setState({
                    item: item
                })
            })

        // this.foo.bar = 0;
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please Select a Itemacter</span>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}