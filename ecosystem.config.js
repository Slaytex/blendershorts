module.exports = {
  apps: [{
    name: 'blendershorts',
    script: './server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      PORT: 3005,
      NODE_ENV: 'production'
    }
  }]
};
