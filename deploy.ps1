Write-Host '🚀 Updating and Deploying to https://sps-takeo.com...' -ForegroundColor Cyan
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git add -A
git commit -m "Auto deploy SPS Takeo: $timestamp"
git push origin main
Write-Host '✅ Website updated successfully!' -ForegroundColor Green
