import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Wrapper, Logo, Menu, List, ListItem } from './navBar';
import LogIn from '../login/login.jsx';
import { Button } from '@mui/material';
import { Link as Move } from 'react-router-dom';
import { auth } from '../../firebase';

const Navbar = ({ currentUser }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }
    
    
    return (
        <>
            <Wrapper style={{backgroundColor: isScrolled ? '#00051bf6' : ' '}}>
                <Logo><img src='https://ik.imagekit.io/gwmjmoaowfjn/service_page/logo_DrDNELMyIQ.png?updatedAt=1638856029664'/></Logo>
                <Menu>
                    <List>
                        <ListItem>
                            <Link activeClass="active"
                                    to="nav_to_service"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                Services
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link activeClass="active"
                                    to="nav_to_contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                Contact
                            </Link>
                        </ListItem>
                    </List>
                    {
                        currentUser ? (
                            <div onClick={() => auth.signOut()}>LogOut</div>
                        ) : (
                                <Move to='/login'><Button variant="outlined" style={{ fontSize: '1.4rem', fontWeight: 700 }}>LOG IN</Button></Move>
                        )
                    }
                </Menu>
            </Wrapper>
        </>
    )
}

export default Navbar;
