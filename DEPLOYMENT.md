# Vercel Deployment Guide

This guide will help you deploy your BFHL API to Vercel.

## Prerequisites
- Vercel account (you already have one)
- GitHub repository with your code
- Node.js installed locally

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BFHL API"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Node.js project
5. Click "Deploy"
6. Wait for deployment to complete

### Step 3: Get Your API Endpoint
- Your API will be available at: `https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl`
- The `/bfhl` route is already configured in `vercel.json`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel
```

### Step 3: Follow Prompts
- Login to your Vercel account
- Choose to link to existing project or create new
- Confirm deployment settings
- Wait for deployment

## Testing Your Deployed API

### Test with cURL (Command Prompt)
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

### Test with PowerShell
```powershell
$body = @{data = @("a", "1", "334", "4", "R", "$")} | ConvertTo-Json
Invoke-RestMethod -Uri "https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl" -Method Post -Body $body -ContentType "application/json"
```

### Test with Postman/Thunder Client
1. Create new POST request
2. URL: `https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
   ```json
   {
     "data": ["a", "1", "334", "4", "R", "$"]
   }
   ```

## Environment Variables (if needed)
- No environment variables are required for this project
- All configuration is in `vercel.json`

## Automatic Deployments
- Every push to your main branch will trigger automatic deployment
- Vercel provides preview deployments for pull requests

## Troubleshooting

### Common Issues
1. **Build Error**: Check if all dependencies are in `package.json`
2. **Route Not Found**: Ensure `vercel.json` is properly configured
3. **Function Timeout**: API should respond quickly, no timeout issues expected
4. **Authentication Required**: If you see authentication errors, disable deployment protection in Vercel dashboard

### Check Logs
- Go to your Vercel dashboard
- Click on your project
- Check "Functions" tab for any errors

### Disable Deployment Protection
If your API shows authentication errors:
1. Go to Vercel Dashboard → Your Project → Settings → General
2. Scroll to "Deployment Protection" section
3. Change from "Password Protection" to "No Protection"
4. Save changes

## Your API Endpoint
Once deployed, your API endpoint will be:
```
POST https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

## Submission
Submit this URL to the form: `https://forms.office.com/r/ZeVpUYp3zV`
- Make sure to include the `/bfhl` route
- Test thoroughly before submission
- Verify all example cases work correctly
