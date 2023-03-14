module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'lusinavaki@gmail.com',
          defaultReplyTo: 'lusinavaki@gmail.com',
        },
      },
    },
  });