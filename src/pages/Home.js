import React from 'react';

//Component
import Portrait from '../components/Portrait/Portrait';
import AboutUs from '../components/AboutUs/AboutUs';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Portrait/>
                <AboutUs/>
            </React.Fragment>
        )
    }
}

export default Home;