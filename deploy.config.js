module.exports = {
  apps: [
    {
      name: 'JCWD-2104-01-BE', // Format JCWD-{batchcode}-{groupnumber}
      script: './packages/server/src/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 8401,
      },
      time: true,
    },
    {
      name: 'JCWD-2104-01-FE',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/html/jcwd-210401.purwadhikabootcamp.com/packages/client',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3400,
      },
    },
  ],
};
