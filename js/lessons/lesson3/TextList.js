'use strict';

import React from 'react';

class TextList extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.list !== nextProps.list;
    }

    render() {
        return (
            <ul>
              { this.props.list.map(function(txt, index) {
                    return (
                        <li key={ index }>
                          { txt }
                        </li>
                        );
                }) }
            </ul>
            );
    }
}

TextList.propTypes = {list: React.PropTypes.array};

module.exports = TextList;
