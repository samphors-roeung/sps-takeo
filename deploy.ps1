Write-Host '🚀 Updating and Deploying to https://sps-takeo.com...' -ForegroundColor Cyan
git add .
git commit -m " Auto deploy: 2026-08-29 14:43:25 \
git push origin main
Write-Host '✅ Website updated successfully!' -ForegroundColor Green
