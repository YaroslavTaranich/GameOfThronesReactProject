import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import ItemList from '../itemList';
import CharDetails from '../itemDetails';
import CaracterPage from '../pages/characterPage/characterPage';
import BooksPage from '../pages/booksPage/booksPage';
import HousesPage from '../pages/housesPage/housesPage';


export default class App extends Component{

    gotService = new GotService();

    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar(showRandomChar) {
        this.setState(() => {
            return {
                showRandomChar: !this.state.showRandomChar
            }
        });
    }



    render() {
        const {showRandomChar, error} = this.state;
        const randomCharContent = showRandomChar ? <RandomChar/> : null;
        const randomCharButton = showRandomChar ? 'Close' : 'Open';

        if (error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharContent}
                        </Col>
                    </Row>
                    <Button className="mb-4" color='secondary' size='lg' onClick={() => this.toggleRandomChar(showRandomChar)}>
                        {randomCharButton} Random Character
                    </Button>
                    <CaracterPage />
                    <BooksPage />
                    <HousesPage />
                    {/* <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => `${item.name}`}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>                      
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => `${item.name}`}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>   */}
                </Container>
            </>
        );
    }
    
};

