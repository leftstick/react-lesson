'use strict';

import React from 'react';

class CountdownTimer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <span type='text'>TODO: the number to be counted</span>
              <button>
                Start
              </button>
            </div>
            );
    }
}

CountdownTimer.propTypes = {
    start: React.PropTypes.number
};

module.exports = CountdownTimer;
