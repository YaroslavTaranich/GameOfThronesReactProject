import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import { CharacterPage, HousesPage, BooksPage, BooksItem, MainPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';


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
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomCharContent}
                                <Button 
                                    className="mb-4" 
                                    color='secondary' 
                                    size='lg' 
                                    onClick={() => this.toggleRandomChar(showRandomChar)}>
                                    {randomCharButton} Random Character
                                </Button>
                            </Col>

                        </Row>
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                            return <BooksItem bookId={id}/>
                        }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
    
};

