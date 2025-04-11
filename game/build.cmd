@echo off
pushd %~dp0

del ..\assets\scripts\game.board_and_cards.*
dotnet build

popd
