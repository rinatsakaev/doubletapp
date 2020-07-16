import React, {Component, createContext} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Create from './Create';
import Index from './Index';

class App extends Component {
    render() {
        const {history} = this.props;
        return (
            <div className="App">
                    <Switch>
                        <Route exact history={history} path='/' component={Index}/>
                        <Route history={history} path='/create' component={Create}/>
                    </Switch>
            </div>
        );
    }
}

export default withRouter(App);
