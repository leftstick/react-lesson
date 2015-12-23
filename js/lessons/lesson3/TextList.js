'use strict';

import React from 'react';

class TextList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
              <li>
                text should be added here
              </li>
            </ul>
            );
    }
}

TextList.propTypes = {};

module.exports = TextList;
