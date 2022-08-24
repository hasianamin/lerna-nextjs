module.exports = {
  apps: [
    {
      name: 'JCWD-2104-01-BE', // Format JCWD-{batchcode}-{groupnumber}
      script: './projects/server/src/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 8401,
      },
      time: true,
    },
    {
      name: 'JCWD-2104-01-FE',
      script: 'node_modules/next/dist/bin/next',
      args: 'start server',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3401,
      },
    },
  ],
};
