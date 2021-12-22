import React from 'react';
import Navbar from '../../components/navbar/navBar.jsx';
import Main from '../../components/main/main.jsx';
// import Card from '../../components/card/card.jsx';
import Slide from '../../components/slides/slide.jsx';
import { Slide1, Slide2, Slide3, Slide4 } from '../../asset';
import Items from '../../components/CardItems/items.jsx';
import LogIn from '../../components/login/login.jsx'
import Footer from '../../components/footer/footer.jsx';
import { Wrapper, SlideBg } from './home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from '../../firebase';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
    
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Router>
            <Wrapper>
                    <Navbar currentUser={this.state.currentUser }/>
                <Main />
            </Wrapper>
            <SlideBg>
                <Slide Slides={[Slide1, Slide2, Slide3, Slide4]}/>
            </SlideBg>
            <Items />
            <Footer />
            <Switch>
                <Route path='/login'><LogIn /></Route>
            </Switch>
        </Router>
        )
    }
}

export default Home;
