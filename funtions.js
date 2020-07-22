const axios = require('axios');


const funtions = {
    add: (num1, num2) => num1 + num2,

    isNull: () => null,

    checkValue: x => x,

    createUser: () => {
        const user = { PrimerNombre: 'Ruben' }
        user['SegundoNombre'] = 'Torres';
        return user;
    },
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(res => res.data)
            .catch(err => 'error')

};


module.exports = funtions;
