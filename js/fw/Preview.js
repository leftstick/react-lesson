'use strict';

import React from 'react';

var {assign} = Object;

class Preview extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var style = assign({}, this.props.style, styles.block);
        return (
            <div style={ style }>
              { this.props.children }
            </div>
            );
    }
}

var styles = {
    block: {
        width: '500px',
        height: '500px',
        borderRadius: '3px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#D8D8D8',
        margin: 'auto',
        marginTop: '25px'
    }
};

Preview.propTypes = {style: React.PropTypes.object};

module.exports = Preview;
