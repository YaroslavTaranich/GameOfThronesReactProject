import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, 
        CardBody, CardTitle } from "reactstrap";
import char from './img/char.jpg';
import books from './img/books.jpg';
import houses from './img/houses.jpg';

export default class MainPage extends Component{
    render() {
        return(
            <div>
                <h1 className="text-white text-center">Welcome to Game of Thrones DB</h1>
                <div className="d-flex justify-content-between mt-5">
                <Card>
                    <CardImg top width="100%" src={char} alt="Characters page" />
                    <CardBody>
                        <CardTitle tag="h5">Game of Thrones Characters</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to="/characters/" className='btn btn-secondary text-white'>Show Characters</Link>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src={books} alt="Characters page" />
                    <CardBody>
                        <CardTitle tag="h5">Game of Thrones Books</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to="/books/" className='btn btn-secondary text-white'>Show Books</Link>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src={houses} alt="Characters page" />
                    <CardBody>
                        <CardTitle tag="h5">Game of Thrones Houses</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to="/houses/" className='btn btn-secondary text-white'>Show Houses</Link>
                    </CardBody>
                </Card>
                </div>

            </div>
        )
    }
}