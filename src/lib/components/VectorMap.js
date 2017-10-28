import React from 'react';
import './VectorMap.scss';
import PropTypes from 'prop-types';
import maps from './../maps';

const $ = window.jQuery;


class VectorMap extends React.PureComponent {

    constructor(props) {
        super(props);

        this.$node = null;
        this.$mapObject = null;
    }
    /**
     * load required map
     */
    componentWillMount() {
        const { map } = this.props;

        if (map && maps.indexOf(map) !== -1) {
            require(`./../maps/${map}`);
        } else {
            throw new Error(`No such map, please select one of the following: ${maps.join()}`);
        }
    }

    /**
     * generate the map
     */
    componentDidMount() {
        const { map } = this.props;

        this.$node = $('#container');

        if (map) {
            this.$node.vectorMap({...this.props});
            this.$mapObject = this.$node.vectorMap('get', 'mapObject');
        }
    }

    /**
     * set map background color
     * @param color
     */
    setBackgroundColor(color) {
        this.$mapObject.setBackgroundColor(color)
    }

    render() {
        return (
            <div id="container" />
        );
    }
}

VectorMap.propTypes = {
    map: PropTypes.oneOf(maps).isRequired,
    backgroundColor: PropTypes.string
};

export default VectorMap;
