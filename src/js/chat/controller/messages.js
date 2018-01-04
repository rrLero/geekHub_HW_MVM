// @flow

import messagesView from '../view/messages';
import newMessageFormView from '../view/new-message-form';
import {messages} from "../model/messages";

const messagesController = () => {

    messagesView('#messages', messages, {
        onDelete: (message) => messages.remove(message)
    });

    const form = newMessageFormView('#new-message-form', {
        onSend: (text) => {
            messages.add({text: text});
            if (form) {
                form.clear();
            }
        }
    });

};

export default messagesController;