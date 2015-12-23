'use strict';

import React from 'react';

class LessonTitle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 style={ styles.header }>{ this.props.text }</h2>
            );
    }
}

var styles = {header: {width: '100%', textAlign: 'center'}};

LessonTitle.propTypes = {text: React.PropTypes.string};

module.exports = LessonTitle;
