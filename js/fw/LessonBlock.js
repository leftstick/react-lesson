'use strict';

import React from 'react';
import { Link } from 'react-router';

var {assign} = Object;

class LessonBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            block: assign({}, styles.block, {boxShadow: 'none'})
        };
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    _onMouseEnter() {
        this.setState({
            block: assign({}, styles.block, {
                boxShadow: '3px 3px 3px 3px #ccc'
            })
        });
    }

    _onMouseLeave() {
        this.setState({
            block: assign({}, styles.block, {boxShadow: 'none'})
        });
    }

    render() {
        return (
            <Link to={ this.props.to } style={ styles.link }>
            <div style={ this.state.block } onMouseEnter={ this._onMouseEnter } onMouseLeave={ this._onMouseLeave }>
              <span style={ styles.txt }>{ this.props.title }</span>
            </div>
            </Link>
            );
    }
}

var styles = {
    block: {
        width: '100px',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '3px',
        backgroundColor: '#FAFAFA',
        transition: 'all 0.3s ease 0s',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#D8D8D8',
        margin: '10px'
    },
    txt: {
        fontWeight: 'bold'
    },
    link: {
        textDecoration: 'none',
        color: '#000'
    }
};

LessonBlock.propTypes = {
    title: React.PropTypes.string,
    to: React.PropTypes.string
};

module.exports = LessonBlock;
