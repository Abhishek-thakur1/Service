import { Container, Cards } from './item.js';
import Card from '../card/card.jsx';
import Services from '../../data';
const Items = () => {
    return (
        <Container>
            <h3 id="nav_to_service">Our Services</h3>
            <Cards>
                {Services.map(service => (
                <Card key={service.id} {...service}/>
            ))}
            </Cards>
        </Container>
    )
}

export default Items;
