// @flow

import type MessagesArray from '../../models/messagesArray';

const messagesView = (selector: string, messages: MessagesArray, callbacks: {[key:string]: any}) => {
    const list = document.querySelector(selector);
    if (list) {
        const template = list.querySelector('ul > li');
        if (template && template.parentNode) {
            template.parentNode.removeChild(template);

            const add = (message) => {
                const messageElement = template.cloneNode(true);
                const dataText = messageElement.querySelector('[data-text]');
                if (dataText) {
                    dataText.innerText = message.text;
                }

                const dataDelete = messageElement.querySelector('[data-delete]');
                if (dataDelete instanceof HTMLElement) {
                    dataDelete.addEventListener('click', (event: MouseEvent) => {
                        callbacks.onDelete(message)
                    });
                }
                list.appendChild(messageElement);
            };

            const remove = (message, index) => {
                list.removeChild(list.children[index]);
            };
            messages.forEach(add);
            messages.on('add', add);
            messages.on('remove', remove);

        }
    }
};

export default messagesView;