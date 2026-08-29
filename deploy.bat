@echo off
echo ========================================================
echo  Updating and Deploying SPS Takeo Website...
echo ========================================================
cd /d C:\Users\roeun\sps-takeo
git add .
git commit -m " Update website: %date% %time%\
git push origin main
echo ========================================================
echo Website updated successfully!
echo ========================================================
