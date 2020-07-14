import React, {Component} from 'react';

import '../styles/App.scss';
import TextField from '../components/text-field';
import Select from '../components/select';

class App extends Component {
    render() {
        return (
            <div>
                <Select placeholder={"Пол"}/>
                <h1>Students</h1>
            </div>
        );
    }
}

export default App;
