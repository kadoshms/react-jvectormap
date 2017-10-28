import React from 'react';
import Example from '../lib';
import { VectorMap } from '../lib';

class App extends React.Component {

    changeBg() {
        this.refs.map.setBackgroundColor('red');
    }

    render() {
        return (
            <div>
                <Example />
                <VectorMap map={'us_aea'}
                           backgroundColor="#FFFFFF"
                           ref="map"
                />
                <button onClick={this.changeBg.bind(this)}>
                    Change color!
                </button>
            </div>
        );
    }
}

export default App;
