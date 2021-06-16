import React from 'react';

//Component
import AboutUs from '../components/AboutUs/AboutUs';
import CallContact from '../components/CallContact/CallContact';
import Servicios from '../components/Servicios/Servicios';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <AboutUs/>
                <CallContact/>
                <Servicios/>
            </React.Fragment>
        )
    }
}

export default Home;