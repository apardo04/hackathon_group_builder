import { Mongo } from 'meteor/mongo';

export const Hackathons = new Mongo.Collection('hackathons');
export const Conversations = new Mongo.Collection('conversations');
