'use strict';

import React from 'react';

class InputBar extends React.Component {

    constructor(props) {
        super(props);
        this._addText = this._addText.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.onTextAdded !== nextProps.onTextAdded;
    }

    _addText(e) {
        this.props.onTextAdded(this.refs.txt.value);
        this.refs.txt.value = '';
    }

    render() {
        return (
            <div>
              <input type='text' ref='txt' />
              <button onClick={ this._addText }>
                ADD
              </button>
            </div>
            );
    }
}

InputBar.propTypes = {onTextAdded: React.PropTypes.func};

module.exports = InputBar;
