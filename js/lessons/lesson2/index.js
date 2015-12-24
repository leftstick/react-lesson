'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';
import Preview from 'fw/Preview';

class Lesson2 extends React.Component {

    constructor(props) {
        super(props);
    }

    _onClickBtn(e) {
        alert(e.target.innerHTML);
    }

    render() {
        return (
            <div>
              <LessonTitle text='alert something while clicking below button' />
              <LessonHelper>
                <DocumentLink link='http://facebook.github.io/react/docs/events.html' text='Read events' />
                <DocumentLink link='http://facebook.github.io/react/docs/tags-and-attributes.html' text='Read attributes' />
              </LessonHelper>
              <Preview>
                <button onClick={ this._onClickBtn }>
                  Punch me, bitch!
                </button>
              </Preview>
            </div>
            );
    }
}

module.exports = Lesson2;
