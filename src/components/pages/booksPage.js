import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import { withRouter } from 'react-router';


class BooksPage extends Component {

    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch() {
          this.setState({
            error: true
        })
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
                onItemSelected={(itemId) => { 
                    this.props.history.push(`${itemId}`)
                }}
                pageNumber={1}
                getData={this.gotService.getAllBooks}
                renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}
            />
        )
    }
}

export default withRouter(BooksPage);