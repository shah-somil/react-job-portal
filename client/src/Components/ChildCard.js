import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ChildCard(prop){
return(
    <>
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prop.image} />
        <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>
            {prop.text}
        </Card.Text>
        </Card.Body>
     </Card>
    </>
)
}

export default ChildCard;