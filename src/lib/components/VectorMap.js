import React from 'react';
import './VectorMap.scss';
// const $ = window.jQuery;
const $ = window.jQuery;
require('./map');

class VectorMap extends React.PureComponent {

    componentDidMount() {
        $('#container').vectorMap({
            map: 'world_mill'
        });
    }

    render() {
        return (
            <div id="container" />
        );
    }
}

export default VectorMap;
