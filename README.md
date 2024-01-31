# Setting Up Node.js and Golang Applications with Nginx, PM2, and SSL/TLS using Cloudflare

This comprehensive guide will walk you through the process of setting up both Node.js and Golang applications with Nginx, PM2, and SSL/TLS using Cloudflare. Follow the steps below:


## Node.js Application Setup

### Step 1: Connect to your server via SSH

```bash
ssh -i /home/wush/wush.pem ubuntu@publicip
```

### Step 2: Install Node.js and NPM

```bash
sudo apt update
sudo apt install nodejs npm -y
```

### Step 3: Clone your Node.js application

```bash
git clone https://github.com/wussh/nodejs-go-nginx.git
```

### Step 4: Install PM2 globally

```bash
npm install pm2 -g
```

### Step 5: Check PM2 installation

```bash
pm2 list
```

### Step 6: Configure PM2 to start automatically on server restart

```bash
pm2 startup
```

### Step 7: Start your Node.js application with PM2

```bash
pm2 start server.js --name api-main
```

### Step 8: Enable firewall and allow port 22

```bash
sudo ufw enable
sudo ufw allow 22
```

### Step 9: Point domain to server and set up SSL/TLS with Cloudflare

- Generate an origin certificate and private key from Cloudflare.

### Step 10: Install and configure Nginx

```bash
sudo apt install nginx
ufw allow 'Nginx Full'
```

### Step 11: Create Nginx configuration file

```bash
cp /nodejs-nginx/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
```

### Step 12: Remove default Nginx configuration

```bash
mv /etc/nginx/sites-enabled/default default.bak
```

### Step 13: Install Cloudflare SSL certificate on the server

```bash
nano /etc/ssl/certs/cert.pem
nano /etc/ssl/private/cert.key
```

### Step 14: Test Nginx configuration

```bash
nginx -t
```

### Step 15: Reload Nginx

```bash
service nginx reload
```

Your Node.js application should now be accessible through HTTPS with Nginx acting as a reverse proxy.

---

## Golang Application Setup

Follow similar steps for setting up your Golang application:

### Step 1: Connect to your server via SSH

```bash
ssh -i /home/wush/wush.pem ubuntu@publicip
```

### Step 2: Install Golang

```bash
sudo apt update
sudo apt install golang-go -y
```

### Step 3: Clone your Golang application

```bash
git clone https://github.com/wussh/nodejs-go-nginx.git
```

### Step 4: Build and Run Golang application

```bash
cd golang-nginx
go run main.go
```

Follow the remaining steps (firewall, domain pointing, SSL/TLS setup, Nginx installation, and configuration) similar to the Node.js application setup.

Your Golang application should now be accessible through HTTPS with Nginx acting as a reverse proxy.