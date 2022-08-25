module.exports = {
  apps: [
    {
      name: 'JCWD-2104-01-FE', // Format JCWD-{batchcode}-{groupnumber}
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 8401,
      },
    },
  ],
};
