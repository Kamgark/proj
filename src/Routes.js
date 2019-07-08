import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';  
import RuminationsPage from './pages/RuminationsPage';
import CollaborationPage from './pages/collaborationPage';
import ConsultationPage from './pages/consultationPage';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={RuminationsPage} exact/>
                    <Route path="/consultation" component={ConsultationPage}/>
                    <Route path="/collaboration" component={CollaborationPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default withRouter(App);
