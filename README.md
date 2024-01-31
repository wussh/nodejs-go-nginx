Certainly! Here's an updated README.md with more detailed explanations:

```markdown
# Setting Up Node.js Application with Nginx, PM2, and SSL/TLS using Cloudflare

This comprehensive guide will walk you through the process of setting up a Node.js application with Nginx, PM2, and SSL/TLS using Cloudflare. Follow the steps below:

## Step 1: Connect to your server via SSH

```bash
ssh -i /home/wush/wush.pem ubuntu@54.251.180.137
```

## Step 2: Install Node.js and NPM

Update the package list and install Node.js and NPM:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

## Step 3: Clone your Node.js application

Clone your Node.js application repository:

```bash
git clone https://github.com/wussh/nodejs-nginx.git
```

## Step 4: Install PM2 globally

Install PM2 globally to manage your Node.js application:

```bash
npm install pm2 -g
```

## Step 5: Check PM2 installation

Verify PM2 installation by listing the running processes:

```bash
pm2 list
```

## Step 6: Configure PM2 to start automatically on server restart

Configure PM2 to start your application automatically on server restart:

```bash
pm2 startup
```

## Step 7: Start your Node.js application with PM2

Start your Node.js application using PM2:

```bash
pm2 start server.js --name api-main
```

## Step 8: Enable firewall and allow port 22

Enable the firewall and allow SSH traffic (port 22):

```bash
ufw enable
ufw allow 22
```

## Step 9: Point domain to server and set up SSL/TLS with Cloudflare

- Generate an origin certificate and private key from Cloudflare.

## Step 10: Install and configure Nginx

Install Nginx and allow HTTP and HTTPS traffic:

```bash
sudo apt install nginx
ufw allow 'Nginx Full'
```

## Step 11: Create Nginx configuration file

Copy the Nginx configuration file from your repository's `nginx` folder:

```bash
cp /path/to/your/repo/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
```

## Step 12: Remove default Nginx configuration

Backup and remove the default Nginx configuration:

```bash
mv /etc/nginx/sites-enabled/default default.bak
```

## Step 13: Install Cloudflare SSL certificate on the server

Copy the content of the Cloudflare origin certificate and private key into the respective files:

```bash
nano /etc/ssl/certs/cert.pem
nano /etc/ssl/private/cert.key
```

## Step 14: Test Nginx configuration

Test the Nginx configuration to ensure there are no syntax errors:

```bash
nginx -t
```

## Step 15: Reload Nginx

Reload Nginx to apply the changes:

```bash
service nginx reload
```

Your Node.js application should now be accessible through HTTPS with Nginx acting as a reverse proxy.
```

This README.md now includes more detailed explanations for each step, making it easier for users to understand and follow the setup process. Adjust the paths and commands based on your specific project structure and requirements.