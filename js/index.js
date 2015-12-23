/**
 *  Entrance of the lesson
 *
 *  @author  Howard.Zuo
 *  @date    Dec 23, 2015
 *
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

require.ensure([
    'css/main.css',
    'normalize.css/normalize.css',
    './fw/MainController'
], function(require) {
    require('css/main.css').use();
    require('normalize.css').use();

    var MainController = require('./fw/MainController');
    ReactDOM.render(<MainController />, document.querySelector('#view'));
});
