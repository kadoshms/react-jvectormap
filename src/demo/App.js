import React from 'react';
import { VectorMap } from '../lib';
import MallMap from './mall-map';

const handleClick = (event, code) => {
    console.log(`You have click ${code}`)
}
class App extends React.Component {

    changeBg() {
        this.refs.map.setBackgroundColor('red');
    }

    render() {
        return (
          <div>
            <div style={{width: 500, height: 500, display: "inline-block"}}>
                <VectorMap map={'ca_lcc'}
                           backgroundColor="#3b96ce"
                           ref="map1"
                           containerStyle={{
                               width: '100%',
                               height: '100%'
                           }}
                           onRegionClick={handleClick}
                           containerClassName="map1"
                />
            </div>

            <div style={{width: 500, height: 500, display: "inline-block"}}>
                <VectorMap map={MallMap}
                           backgroundColor="#963bce"
                           ref="map2"
                           containerStyle={{
                               width: '100%',
                               height: '100%'
                           }}
                           onRegionClick={handleClick}
                           containerClassName="map2"
                />
            </div>
          </div>
        );
    }
}

export default App;
