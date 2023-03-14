module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: 'lusinavaki@gmail.com',
            from: 'lusinavaki@gmail.com',
            subject: 'My notification',
            text: `New notification: `,
        });
        ctx.send("Email sent");
    }
}