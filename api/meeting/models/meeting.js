'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');

module.exports = {
    lifecycles: {
        async afterCreate(response) {
            if (!response.userId) {
                throw new Error("Invalid input data. Please verify unique constraints!");
            }
            const { data } = await axios.post('http://localhost:1337/auth/local', {
                identifier: response.userId.firstname,
                password: 'test1234',
            });
            if (!data && !data.user.id) {
                throw new Error("User not found!")
            } 
            strapi.query('notification').create({
                userId: data.user.id,
                notificationText: "You created a meeting",
                read: false,
            });
        }
    }
};
