import React from 'react';
import { VectorMap } from '../lib';

class App extends React.Component {

    changeBg() {
        this.refs.map.setBackgroundColor('red');
    }

    render() {
        return (
            <div>
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
