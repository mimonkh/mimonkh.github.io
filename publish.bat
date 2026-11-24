@echo off
rem Publishes every change in this folder to https://mimonkh.github.io
cd /d "%~dp0"
git add -A
git diff --cached --quiet
if not errorlevel 1 (
  echo Nothing changed - nothing to publish.
  pause
  exit /b 0
)
echo Changes to publish:
git diff --cached --stat
echo.
set "MSG="
set /p "MSG=Short description of the change (press Enter to skip): "
if not defined MSG set "MSG=Update site"
git commit -q -m "%MSG%"
if errorlevel 1 (
  echo Commit failed.
  pause
  exit /b 1
)
git push
if errorlevel 1 (
  echo.
  echo Push failed. Check your internet connection or your GitHub sign-in.
  pause
  exit /b 1
)
echo.
echo Published. The live site updates in about a minute:
echo https://mimonkh.github.io   (press Ctrl+F5 to refresh)
pause
