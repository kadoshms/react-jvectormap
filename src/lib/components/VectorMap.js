import React from 'react';
import './VectorMap.scss';
import PropTypes from 'prop-types';
import maps from './../maps';

const $ = window.jQuery;


class VectorMap extends React.PureComponent {

    componentWillMount() {
        const { mapName } = this.props;

        if (mapName && maps.indexOf(mapName) !== -1) {
            require(`./../maps/${mapName}`);
        } else {
            throw new Error(`No such map, please select one of the following: ${maps.join()}`);
        }
    }

    componentDidMount() {
        const { mapName } = this.props;

        if (mapName) {
            $('#container').vectorMap({
                map: 'world_mill'
            });
        }
    }

    render() {
        return (
            <div id="container" />
        );
    }
}

VectorMap.propTypes = {
    mapName: PropTypes.oneOf(maps).isRequired
};

export default VectorMap;
