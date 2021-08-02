import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CaracterPage from '../characterPage/characterPage';


export default class App extends Component{

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
                    <CaracterPage />
                    <CaracterPage />
                </Container>
            </>
        );
    }
    
};

