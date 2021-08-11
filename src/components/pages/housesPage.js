import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import { Field } from '../itemDetails/itemDetails';

export default class HousesPage extends Component {

    gotService = new GotService();

    state = {
        selectedHouse: 1,
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
                selectedHouse: id
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
            getData={this.gotService.getAllHouses}
            renderItem={({name, region}) => `${name} (${region})`}
            />
        )

        const houseDetails = (
            <ItemDetails 
            itemId={this.state.selectedHouse}
            content="house">
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='Ancestral weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={houseDetails}/>
        )
    }
}

