'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        afterCreate(data) {
            if(!data.userId){
                throw new Error("User not found")
            } else {
                strapi.query('notification').create({
                    userId: data.userId.id,
                    notificationText: "You created a meeting",
                    read: false,
                });
            }
        }
    }
};
