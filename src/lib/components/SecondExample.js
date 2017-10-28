import React from 'react';
import './SecondExample.scss';
// const $ = window.jQuery;
const $ = window.jQuery;
require('./map');

class SecondExample extends React.PureComponent {

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

export default SecondExample;
