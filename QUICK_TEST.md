# Quick Testing Guide

## ✅ Working Commands

### Command Prompt (cmd)
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

### PowerShell
```powershell
$body = @{data = @("a", "1", "334", "4", "R", "$")} | ConvertTo-Json
Invoke-RestMethod -Uri "https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl" -Method Post -Body $body -ContentType "application/json"
```

## 🧪 Test All Examples

### Example A
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

### Example B
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"2\", \"a\", \"y\", \"4\", \"&\", \"-\", \"*\", \"5\", \"92\", \"b\"]}" https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

### Example C
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"A\", \"ABcD\", \"DOE\"]}" https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

## 📝 Submission URL

Submit this URL to the form: `https://forms.office.com/r/ZeVpUYp3zV`

```
https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

## 🔧 Troubleshooting

If you get authentication errors:
1. Go to Vercel Dashboard → Your Project → Settings → General
2. Disable "Deployment Protection"
3. Save changes
4. Test again with the commands above
