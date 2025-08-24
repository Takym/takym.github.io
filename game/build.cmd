@echo off
pushd %~dp0

del ..\assets\scripts\game.*
dotnet build

popd
