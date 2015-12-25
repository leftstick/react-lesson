'use strict';

import React from 'react';

class CountdownTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {point: this.props.start, interval: null};

        this._tick = this._tick.bind(this);
        this._startTick = this._startTick.bind(this);
        this._endTick = this._endTick.bind(this);
        this._resetTick = this._resetTick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.start !== nextProps.start;
    }

    _tick() {
        if (this.state.point === 0) {
            return this._endTick();
        }
        this.setState({point: this.state.point - 1});
    }

    componentWillUnmount() {
        this._endTick();
    }

    _endTick() {
        clearInterval(this.state.interval);
        this.setState({interval: null});
    }

    _startTick() {
        this._tick();
        this.setState({
            interval: setInterval(this._tick, 1000)
        });
    }

    _resetTick() {
        this.setState({point: this.props.start});
    }

    _renderButton() {
        if (this.state.interval || !this.state.point) {
            return (
                <button onClick={ this._resetTick } disabled={ this.state.interval }>
                  Reset
                </button>
                );
        }
        return (
            <button onClick={ this._startTick }>
              Start
            </button>
            );
    }

    render() {
        return (
            <div>
              <span type='text'>{ this.state.point }</span>
              { this._renderButton() }
            </div>
            );
    }
}

CountdownTimer.propTypes = {
    start: React.PropTypes.number
};

module.exports = CountdownTimer;
