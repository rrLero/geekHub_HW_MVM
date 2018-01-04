// @flow

import MessageArray from '../../models/messagesArray';

const messages = new MessageArray();

messages.add([
    {text: 'hello'},
    {text: 'hi'},
    {text: 'bye'},
]);

export {messages};