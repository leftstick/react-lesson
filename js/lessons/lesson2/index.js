'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';

class Lesson2 extends React.Component {

    constructor(props) {
        super(props);
    }

    _onClickBtn(e) {
        alert(e.target.innerHTML);
    }

    render() {
        return (
            <div style={ styles.container }>
              <LessonTitle text='alert something while clicking below button' />
              <LessonHelper>
                <DocumentLink link='http://facebook.github.io/react/docs/events.html' text='Read events' />
              </LessonHelper>
              <button onClick={ this._onClickBtn }>
                Punch me, bitch!
              </button>
            </div>
            );
    }
}

var styles = {container: {}};

module.exports = Lesson2;
