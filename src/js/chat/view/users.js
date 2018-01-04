// @flow

import typeof {users} from '../model/users'

const usersView = (selector: string, users: users) => {
    const list = document.querySelector(selector);
    if (list) {
        const template = list.querySelector('ul > li');
        if (template && template.parentNode) {
            template.parentNode.removeChild(template);
            users.forEach((user)=>{
                const userElement = template.cloneNode(true);
                const dataName = userElement.querySelector('[data-name]');
                if (dataName) {
                    dataName.innerText = user.name;
                }
                list.appendChild(userElement);
            })
        }
    }
};

export default usersView;