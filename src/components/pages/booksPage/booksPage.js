import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import ErrorMessage from '../../errorMessage/errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';
import { Field } from '../../itemDetails/itemDetails';

export default class BooksPage extends Component {

    gotService = new GotService();

    state = {
        selectedBook: 1,
        error: false
    }

    componentDidCatch() {
          this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState(() => {
            return {
                selectedBook: id
            }
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            pageNumber={1}
            getData={this.gotService.getAllBooks}
            renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}
            />
        )

        const bookDetails = (
            <ItemDetails 
            itemId={this.state.selectedBook}
            content="book">
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}