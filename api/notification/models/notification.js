'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        // Called before an entry is created
        beforeCreate(data) {},
        // Called after an entry is created
        async afterCreate(event) {
            try {
                await strapi.plugins['email'].services.email.send({
                    to: 'lusinavaki@gmail.com',
                    from: 'lusinavaki@gmail.com',
                    subject: 'My notification',
                    text: `New notification: ${event.notificationText}`,
                });
            } catch(err) {
                console.log(err);
            }
        },
      },
};
