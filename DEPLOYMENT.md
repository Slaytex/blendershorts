# Deployment Guide for Ubuntu Server

This guide will help you deploy the Blender Shortcuts website on your Ubuntu server.

## Prerequisites

- Ubuntu server (18.04 or later)
- SSH access to your server
- Node.js and npm installed

## Step 1: Install Node.js

If Node.js is not already installed:

```bash
# Update package list
sudo apt update

# Install Node.js (LTS version)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

## Step 2: Transfer Files to Server

Upload your project files to your Ubuntu server. You can use:

**Option A: Using SCP**
```bash
scp -r /path/to/blendershorts user@your-server-ip:/home/user/blendershorts
```

**Option B: Using Git (Recommended)**
```bash
# On your server
cd /home/user
git clone https://github.com/Slaytex/blendershorts.git
cd blendershorts
```

## Step 3: Install Dependencies

```bash
cd /home/user/blendershorts
npm install
```

## Step 4: Configure Environment (Optional)

Create a `.env` file if you want to customize the port:

```bash
echo "PORT=3000" > .env
```

Or set it directly when running:
```bash
PORT=3000 node server.js
```

## Step 5: Run the Server

### Option A: Direct Run (for testing)
```bash
node server.js
```

The server will start on port 3000 (or your specified PORT).

### Option B: Using PM2 (Recommended for production)

PM2 keeps your app running in the background and restarts it if it crashes.

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the server with PM2
pm2 start server.js --name blender-shortcuts

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
# Follow the instructions it provides
```

PM2 commands:
- `pm2 list` - View running processes
- `pm2 logs blender-shortcuts` - View logs
- `pm2 restart blender-shortcuts` - Restart the app
- `pm2 stop blender-shortcuts` - Stop the app
- `pm2 delete blender-shortcuts` - Remove from PM2

## Step 6: Configure Firewall

Allow traffic on your chosen port:

```bash
# If using UFW
sudo ufw allow 3000/tcp
sudo ufw reload

# Or if using iptables
sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
```

## Step 7: Set Up Reverse Proxy with Nginx (Optional but Recommended)

If you want to use a domain name and HTTPS:

### Install Nginx
```bash
sudo apt install nginx
```

### Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/blender-shortcuts
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Enable the Site
```bash
sudo ln -s /etc/nginx/sites-available/blender-shortcuts /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

### Set Up SSL with Let's Encrypt (Recommended)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Step 8: Verify Deployment

1. Open your browser and navigate to:
   - `http://your-server-ip:3000` (direct access)
   - `http://your-domain.com` (if using Nginx)

2. Test the functionality:
   - View shortcuts
   - Add a new shortcut
   - Edit a shortcut
   - Search for shortcuts

## Troubleshooting

### Server won't start
- Check if port 3000 is already in use: `sudo lsof -i :3000`
- Check logs: `pm2 logs blender-shortcuts` or check console output

### Can't access from browser
- Verify firewall allows port 3000
- Check if server is running: `pm2 list` or `ps aux | grep node`
- Verify server is listening: `sudo netstat -tlnp | grep 3000`

### Changes not saving
- Check file permissions on `shortcuts.json`: `chmod 644 shortcuts.json`
- Check directory permissions: `chmod 755 .`
- Check PM2 logs for errors: `pm2 logs blender-shortcuts`

### Permission errors
```bash
# Fix ownership if needed
sudo chown -R $USER:$USER /home/user/blendershorts
```

## Updating the Application

When you make changes:

```bash
cd /home/user/blendershorts
git pull  # If using git
npm install  # If dependencies changed
pm2 restart blender-shortcuts  # Restart the app
```

## Backup

Regularly backup your `shortcuts.json` file:

```bash
# Create backup directory
mkdir -p ~/backups/blendershorts

# Backup script (add to crontab for automatic backups)
cp shortcuts.json ~/backups/blendershorts/shortcuts-$(date +%Y%m%d-%H%M%S).json
```

## Security Notes

- Keep Node.js and npm updated
- Use HTTPS in production (Let's Encrypt)
- Consider adding authentication if the site will be public
- Regularly backup your data
- Keep your server updated: `sudo apt update && sudo apt upgrade`

