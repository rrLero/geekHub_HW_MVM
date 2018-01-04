// @flow

const newMessageFormView = (selector: string, callbacks: {[key: string]: any}) => {

    const form = document.querySelector(selector);

    if (form instanceof HTMLFormElement) {

        const textInput = form.querySelector('[name="text"]');

        form.addEventListener('submit', (event) => {

            event.preventDefault();
            if (typeof callbacks.onSend  === 'function' && textInput instanceof HTMLInputElement) {
                callbacks.onSend(textInput.value)
            }
        });

        return {
            clear: ()=> {
                if (textInput instanceof HTMLInputElement) {
                    textInput.value = ''
                }
            }
        }
    }
};

export default newMessageFormView;