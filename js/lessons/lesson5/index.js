'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';
import Preview from 'fw/Preview';
import CountdownTimer from './CountdownTimer';

class Lesson1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <LessonTitle text='create a countdown timer' />
              <LessonHelper>
                <span>This component should accept a number as start point, and a button to start counting it down to 0</span>
                <DocumentLink link='http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html' text='Read interactivity-and-dynamic-uis' />
              </LessonHelper>
              <Preview>
                <CountdownTimer/>
              </Preview>
            </div>
            );
    }
}

module.exports = Lesson1;
