# PowerShell script to push code to GitHub
# Replace YOUR_REPOSITORY_URL with your actual GitHub repository URL

# Navigate to project directory
cd "C:\Users\User\Desktop\MEDIX-AI\Century Web"

# Add GitHub remote (REPLACE WITH YOUR REPOSITORY URL)
# git remote add origin https://github.com/YOUR_USERNAME/century-clinic-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
# git push -u origin main

Write-Host "`nTo use this script:" -ForegroundColor Yellow
Write-Host "1. Open this file and replace YOUR_USERNAME with your GitHub username" -ForegroundColor Yellow
Write-Host "2. Uncomment the git commands by removing the # symbols" -ForegroundColor Yellow
Write-Host "3. Run this script in PowerShell" -ForegroundColor Yellow
Write-Host "`nOr just run these commands manually:" -ForegroundColor Cyan
Write-Host "git remote add origin https://github.com/YOUR_USERNAME/century-clinic-website.git" -ForegroundColor White
Write-Host "git branch -M main" -ForegroundColor White
Write-Host "git push -u origin main" -ForegroundColor White

