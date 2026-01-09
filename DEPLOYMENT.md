# Deploy to Azure - Step by Step Guide

## Method 1: Azure Static Web Apps (FREE) ✨

### Prerequisites
1. Azure account (free tier): https://azure.microsoft.com/free
2. GitHub account
3. Git installed on your computer

### Steps:

#### 1. Initialize Git Repository (if not done)
```powershell
cd "c:\Users\SHRI RAM A U\OneDrive\Desktop\marg-solutions"
git init
git add .
git commit -m "Initial commit - Marg Home Solutions"
```

#### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Create new repository: `marg-home-solutions`
3. Don't initialize with README (already have files)
4. Copy the repository URL

#### 3. Push to GitHub
```powershell
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

#### 4. Deploy to Azure Static Web Apps
1. Go to Azure Portal: https://portal.azure.com
2. Click **"Create a resource"**
3. Search for **"Static Web App"**
4. Click **Create**

**Configuration:**
- **Subscription**: Free Trial or Pay-As-You-Go (won't be charged)
- **Resource Group**: Create new → `marg-solutions-rg`
- **Name**: `marg-home-solutions`
- **Plan type**: **Free**
- **Region**: Choose nearest (e.g., Central India)
- **Deployment source**: **GitHub**
- **Sign in to GitHub** and authorize
- **Organization**: Your GitHub username
- **Repository**: `marg-home-solutions`
- **Branch**: `main`

**Build Details:**
- **Build Presets**: Next.js
- **App location**: `/`
- **Output location**: `.next`

5. Click **Review + Create**
6. Click **Create**

#### 5. Wait for Deployment (3-5 minutes)
- Azure will automatically build and deploy
- You'll get a URL like: `https://marg-home-solutions-xxxxx.azurestaticapps.net`

#### 6. Access Your Website
- Copy the URL from Azure portal
- Share with client for review! 🎉

---

## Method 2: Azure App Service (Alternative)

### Using VS Code Extension

#### 1. Install Extension
- Open VS Code
- Install "Azure App Service" extension
- Sign in to Azure

#### 2. Deploy
1. Right-click on project folder
2. Select **"Deploy to Web App"**
3. Create new Web App
4. Select Free tier (F1)
5. Choose location
6. Wait for deployment

#### 3. Configure
- Runtime: Node.js 18 LTS
- Startup command: `npm start`

---

## Important Notes for Admin Panel

### Web3Forms Setup
Before going live, update your Web3Forms API key in:
`components/shared/ContactForm.tsx` line 76

Replace: `YOUR_WEB3FORMS_ACCESS_KEY`
With your actual key from: https://web3forms.com

### Admin Access
- URL: `https://your-site.azurestaticapps.net/admin`
- Username: `admin`
- Password: `marg@2026`

⚠️ **Change password before showing to client!**

---

## Post-Deployment Checklist

✅ Test all pages load correctly
✅ Test contact form submission
✅ Test admin login at `/admin`
✅ Test promotions editing
✅ Verify phone number validation works
✅ Check mobile responsiveness

---

## Custom Domain (After Client Approval)

1. Buy domain from GoDaddy/Namecheap
2. In Azure portal → Static Web App → Custom domains
3. Add domain and configure DNS
4. Free SSL certificate automatically provided!

---

## Estimated Costs

- **Static Web Apps Free Tier**: $0/month
  - 100 GB bandwidth
  - 2 custom domains
  - Perfect for review/small sites

- **Custom Domain**: ₹500-1500/year
  - .com, .in domains

**Total for review period: FREE** ✨

---

## Support

If deployment fails:
1. Check build logs in Azure portal
2. Ensure package.json has correct scripts
3. Verify Node.js version compatibility
4. Check GitHub Actions tab for errors

---

## Quick Deploy Commands

```powershell
# Build locally to test
npm run build

# Start production server locally
npm start

# If successful, push to GitHub
git add .
git commit -m "Ready for deployment"
git push
```

Azure will auto-deploy on every push to main branch!
