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
        selectName: ""
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
                this.setState({
                    selectName: "Character"
                });
                return this.gotService.getCharater(itemId)
             }
             if (content === 'house') {
                this.setState({
                    selectName: "House"
                });
                return this.gotService.getHouse(itemId)
             }
             if (content === 'book') {
                this.setState({
                    selectName: "Book"
                });
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

        const {item, selectName} = this.state;

        if (!item) {
            return <span className='select-error'>Please Select a {selectName}</span>
        }

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