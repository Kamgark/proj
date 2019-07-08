import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Rumination from '../components/rumination';
class RuminationPage extends Component {
    render() {
        return (
            <div className="container bg-color">
                <div className="row display-center overall-disp">
                    <div className="col-sm-6 inner-bg">
                        <Header />
                        <Rumination/>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(RuminationPage);
