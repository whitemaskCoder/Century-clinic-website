# Deploy to Vercel via GitHub - Step by Step Guide

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in (or create an account if you don't have one - it's free!)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in:
   - **Repository name**: `century-clinic-website` (or any name you like)
   - **Description**: `Century Orthopaedic Clinic Website`
   - **Visibility**: Choose **Public** or **Private** (both work for Vercel)
   - **IMPORTANT**: Do NOT check "Initialize with README", "Add .gitignore", or "Choose a license"
5. Click **"Create repository"**

## Step 2: Copy Your Repository URL

After creating the repository, GitHub will show you a page with instructions. 
**Copy the HTTPS URL** - it will look like:
```
https://github.com/YOUR_USERNAME/century-clinic-website.git
```

## Step 3: Push Your Code to GitHub

I'll help you do this with the commands below. Just give me your GitHub repository URL and I'll run the commands for you!

---

**OR you can run these commands manually:**

Open PowerShell in your project folder and run:

```powershell
# Navigate to your project
cd "C:\Users\User\Desktop\MEDIX-AI\Century Web"

# Add your GitHub repository as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/century-clinic-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

You'll be asked to login to GitHub - use your GitHub username and a Personal Access Token (not your password).

---

## Step 4: Deploy to Vercel from GitHub

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Login"**
   - You can sign up with your GitHub account (makes it easier!)
3. Once logged in, click **"Add New Project"** or **"Import Project"**
4. You'll see a list of your GitHub repositories
5. Find and select **"century-clinic-website"** (or whatever you named it)
6. Click **"Import"**
7. Vercel will automatically detect it's a Next.js project
8. **IMPORTANT**: Check these settings:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `.next` (should be auto-detected)
9. Click **"Deploy"**

## Step 5: Get Your Live URL! 🎉

After 1-2 minutes, your site will be live! Vercel will show you a URL like:
```
https://century-clinic-website.vercel.app
```

You can now:
- Share this URL with your client!
- Every time you push changes to GitHub, Vercel will automatically update the site
- You can add a custom domain later if needed

---

## Creating a GitHub Personal Access Token (if needed)

If GitHub asks for a token instead of password:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token"**
3. Give it a name like "Vercel Deploy"
4. Select scopes: check **"repo"** (this gives full repository access)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

---

## Need Help?

Just share your GitHub repository URL with me and I can help you push the code!

