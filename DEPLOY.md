# How to Deploy Your Website to Show Clients

## Option 1: Deploy with Vercel CLI (Easiest - No GitHub needed)

### Step 1: Install Vercel CLI
Open PowerShell in your project folder and run:
```powershell
npm install -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```
This will open a browser window. Sign up for free or login if you already have an account.

### Step 3: Deploy
```powershell
vercel
```
Just press Enter for all the default options. Vercel will automatically detect it's a Next.js project.

### Step 4: Get Your Live URL
After deployment, you'll get a URL like:
`https://century-clinic-website.vercel.app`

You can share this URL with your client! 🎉

---

## Option 2: Deploy via Vercel Website (Alternative)

1. Go to https://vercel.com and sign up/login
2. Click "Add New Project"
3. Click "Import Git Repository" 
4. If you don't have GitHub/GitLab/Bitbucket, you can:
   - Push to GitHub first (see below), OR
   - Use Vercel CLI (Option 1 above)

---

## Option 3: Push to GitHub and Deploy (Good for version control)

### Step 1: Create a GitHub repository
1. Go to https://github.com/new
2. Create a new repository (don't initialize with README)
3. Copy the repository URL

### Step 2: Connect your local repository
In PowerShell, run:
```powershell
cd "C:\Users\User\Desktop\MEDIX-AI\Century Web"
git remote add origin YOUR_REPOSITORY_URL_HERE
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy"

Vercel will automatically deploy your site and give you a live URL!

---

## Quick Deploy (Fastest Method)

If you just want to deploy quickly without GitHub:

```powershell
# Make sure you're in the project folder
cd "C:\Users\User\Desktop\MEDIX-AI\Century Web"

# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel
```

That's it! Your site will be live in under 2 minutes. ✅

---

## Important Notes:

- **Vercel is FREE** for personal projects
- Your site will get a URL like: `your-project-name.vercel.app`
- You can add a custom domain later if needed
- Every time you run `vercel` or push to GitHub, it automatically updates

