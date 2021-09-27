/* eslint-disable max-len */
module.exports = {
  apps : [
    {
      name: 'dasha',
      script: 'app.js',
      instance_var: 'INSTANCE_ID',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOGLEVEL: 'debug',
        HTTP_PORT: 3000,
        JAMBONZ_ACCOUNT_SID: '<your-account-sid-here>',
        JAMBONZ_API_KEY: '<your-api-key-here>',
        JAMBONZ_REST_API_BASE_URL: 'https://api.jambonz.us/v1',
        WEBHOOK_SECRET: '<your-webhook-secret-here>',
        DASHA_SIP_URI: '<generated from dasha sip create-inbound ..>'
      }
    }
  ]
};
