@echo off
echo ========================================================
echo  Updating and Deploying SPS Takeo Website...
echo ========================================================
cd /d C:\Users\roeun\sps-takeo
git add -A
git commit -m "Update SPS Takeo Website: %date% %time%"
git push origin main
echo ========================================================
echo Website updated successfully!
echo ========================================================
