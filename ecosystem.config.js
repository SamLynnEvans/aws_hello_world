module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'http://ec2-18-188-69-127.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/ubuntu_one.pem',
      ref: 'origin/master',
      repo: 'https://github.com/SamLynnEvans/aws_hello_world',
      path: '/home/ubuntu/aws_hello_world',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
