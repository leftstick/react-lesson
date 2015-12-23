'use strict';

import React from 'react';

class InputBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <input type='text' />
              <button>
                ADD
              </button>
            </div>
            );
    }
}

InputBar.propTypes = {};

module.exports = InputBar;
