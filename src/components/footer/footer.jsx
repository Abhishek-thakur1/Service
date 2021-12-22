import { Wrapper, Left, Right, Upper, Lower } from './footer.js';
import { LocalPhone, Business } from '@mui/icons-material';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Footer = () => {
    return (
        <Wrapper id="nav_to_contact">
            <Link to='/'><Left>
                <img src='https://ik.imagekit.io/gwmjmoaowfjn/service_page/logo_DrDNELMyIQ.png?updatedAt=1638856029664' />
            </Left></Link>
            <Right>
                <Upper>
                    <LocalPhone style={{color: 'white', fontSize: '1.8rem'}}/>
                    <p>+91-9783243399</p>
                </Upper>
                <Lower>
                    <Business style={{color: 'white', fontSize: '1.8rem'}} />
                    <p>Bikaner, Rajasthan</p>
                </Lower>
            </Right>
        </Wrapper>
    )
}

export default Footer;
