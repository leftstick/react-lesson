'use strict';

import React from 'react';
import LessonBlock from './LessonBlock';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    _dashboardView() {
        return (
            <div style={ styles.dashboard }>
              <h1 style={ styles.title }>Coding in React</h1>
              <h3 style={ styles.subtitle }>Choose lesson you preferred to start</h3>
              <div style={ styles.linkContainer }>
                <LessonBlock to='lesson1' title='lesson1' />
                <LessonBlock to='lesson2' title='lesson2' />
                <LessonBlock to='lesson3' title='lesson3' />
                <LessonBlock to='lesson4' title='lesson4' />
                <LessonBlock to='lesson5' title='lesson5' />
              </div>
            </div>
            );
    }

    _nestView() {
        return (
            <div style={ styles.nestview }>
              { this.props.children }
            </div>
            );
    }

    render() {
        if (this.props.children) {
            return this._nestView();
        }
        return this._dashboardView();
    }
}

var styles = {
    dashboard: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        position: 'absolute',
        top: '20px',
        width: '100%',
        textAlign: 'center'
    },
    subtitle: {
        position: 'absolute',
        top: '80px',
        width: '100%',
        textAlign: 'center'
    },
    linkContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    nestview: {
        width: '100%',
        height: '100%'
    }
};

module.exports = Dashboard;
