import React from 'react';
import { VectorMap } from '../lib';

const handleClick = (event, code) => {
    console.log(`You have click ${code}`)
}
class App extends React.Component {

    changeBg() {
        this.refs.map.setBackgroundColor('red');
    }

    render() {
        return (
            <div style={{width: 500, height: 500}}>
                <VectorMap map={'ca_lcc'}
                           backgroundColor="#3b96ce"
                           ref="map"
                           containerStyle={{
                               width: '100%',
                               height: '100%'
                           }}
                           onRegionClick={handleClick}
                           containerClassName="map"
                />
            </div>
        );
    }
}

export default App;
