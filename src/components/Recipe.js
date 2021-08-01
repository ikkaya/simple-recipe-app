import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}} className="container col-md-6">
            
                <Container className="recipe "> 
                        <Card className="card" >
                        <Card.Img className="card-image mx-auto w-50 p-2" src={image} />
                        <Card.Body>
                            <Card.Title className="card-title"> <b>{title}</b> </Card.Title>
                            <Card.Text>
                                <ul>{ingredients.map(ingredient => (
                                <ListGroup > <ListGroup.Item action variant="danger">{ingredient.text} </ListGroup.Item> </ListGroup>
                                    ))}
                                </ul>
                                <p><b>Calories: {calories}</b></p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Container>
        </div>
    );
}

export default Recipe;