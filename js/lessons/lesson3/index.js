'use strict';

import React from 'react';
import DocumentLink from 'fw/DocumentLink';
import LessonTitle from 'fw/LessonTitle';
import LessonHelper from 'fw/LessonHelper';
import Preview from 'fw/Preview';
import InputBar from './InputBar';
import TextList from './TextList';

class Lesson3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: []};
        this._textAdded = this._textAdded.bind(this);
    }

    _textAdded(text) {
        this.setState({list: [text,...this.state.list]});
    }

    render() {
        return (
            <div>
              <LessonTitle text='add input text into below list' />
              <LessonHelper>
                <DocumentLink link='http://facebook.github.io/react/docs/more-about-refs.html#the-ref-string-attribute' text='Read reference' />
                <DocumentLink link='http://facebook.github.io/react/docs/multiple-components.html#dynamic-children' text='Read dynamic-children' />
                <DocumentLink link='http://facebook.github.io/react/docs/reusable-components.html' text='Read reusable-components' />
              </LessonHelper>
              <Preview>
                <InputBar onTextAdded={ this._textAdded } />
                <TextList list={ this.state.list } />
              </Preview>
            </div>
            );
    }
}

module.exports = Lesson3;
