@echo off
pushd %~dp0
call game\build.cmd
wsl -d Ubuntu-24.04 -- bundle exec jekyll s --no-watch
popd
