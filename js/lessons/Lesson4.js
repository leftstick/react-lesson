'use strict';

import React from 'react';

class Lesson1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ styles.container }>
              <span style={ styles.txt }>Try to make me in the center of the screen!</span>
            </div>
            );
    }
}

var styles = {container: {}, txt: {}};

module.exports = Lesson1;
