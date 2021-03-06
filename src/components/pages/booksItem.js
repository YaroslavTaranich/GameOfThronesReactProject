import React, {Component} from "react";
import gotService from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails/itemDetails";

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <ItemDetails 
            itemId={this.props.bookId}
            content="book">
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}