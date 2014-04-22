/**
 * @jsx React.DOM
 */
'use strict';

var mergeInto = require('react/lib/mergeInto');

mergeInto(module.exports, {
  App: require('./App'),
  Code: require('./Code'),
  Column: require('./Column'),
  Demo: require('./Demo'),
  GitHubRibbon: require('./GitHubRibbon'),
  NavigationBar: require('./NavigationBar'),
  Page: require('./Page'),
  Section: require('./Section'),
  ShowValue: require('./ShowValue')
});

mergeInto(module.exports, require('./API'));
