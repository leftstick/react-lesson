'use strict';

import React from 'react';

class LessonHelper extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.text !== nextProps.text;
    }

    render() {
        return (
            <div style={ styles.helper }>
              { this.props.children }
            </div>
            );
    }
}

var styles = {
    helper: {
        width: '600px',
        minHeight: '70px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#F2F2F2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
    }
};

LessonHelper.propTypes = {text: React.PropTypes.string};

module.exports = LessonHelper;
