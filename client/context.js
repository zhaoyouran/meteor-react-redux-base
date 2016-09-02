import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';

export default function() {
  return {
    Meteor,
    Accounts,
    FlowRouter,
    Tracker,
    Roles
  };
}