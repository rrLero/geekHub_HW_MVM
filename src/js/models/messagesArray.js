// @flow

export default class MessagesArray extends Array<any> {

    length: number;
    callbacks: Array<any>;

    constructor() {
        super();
        this.length = 0;
        this.callbacks = [];
    }

    add(message: {} | Array<any>) {
        if (message instanceof Array) {
            message.forEach((item) => {
                this.push(item);
                this.trigger('add', [item]);
            })
        } else {
            this.push(message);
            this.trigger('add', [message]);
        }

        return this
    }

    remove(message: {} | Array<any>) {
        const index = this.indexOf(message);
        if (!~index) return this;
        this.splice(index, 1);
        this.trigger('remove', [message, index]);
        return this;
    }

    on(event: string, callback: Function) {
        this.callbacks.push({
            event: event,
            callback: callback
        })
    }

    trigger(event: string, args: Array<any>) {

        args = args || [];

        this.callbacks.forEach((item) => {
            if (item.event === event) {
                item.callback.apply(this, args)
            }
        })
    }
}