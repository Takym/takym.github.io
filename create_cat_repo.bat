@echo off

chcp 65001

cd ..

mkdir %1
cd %1
git init
git remote add origin https://github.com/Takym/%1.git

mkdir .vscode
copy ..\takym.github.io\.vscode\settings.json .vscode

copy ..\takym.github.io\.editorconfig  .
copy ..\takym.github.io\.gitattributes .
copy ..\takym.github.io\.gitmodules    .

echo # %1>README.md
echo See https://takym.github.io/LICENSE.html>LICENSE.md

git add .
git commit -m "initial commit"
git push -u origin master

git checkout -b gh-pages/cat_main
copy ..\takym.github.io\index.html .
echo --->README.md
echo authors: Takym>>README.md
echo category: %1>>README.md
echo cat_main: cat_main>>README.md
echo --->>README.md
echo # %1: (名称未定)>>README.md
echo Copyright (C) 2024 Takym.>>README.md
echo --->posts.md
echo layout: posts>>posts.md
echo title: (名称未定)の一覧>>posts.md
echo authors: Takym>>posts.md
echo pages_viewmode: table>>posts.md
echo category: %1>>posts.md
echo cat_main: cat_main>>posts.md
echo --->>posts.md
echo 記事一覧を取得できません。>>posts.md
echo --->postlist.md
echo layout: posts>>postlist.md
echo title: (名称未定)の一覧>>postlist.md
echo authors: Takym>>postlist.md
echo category: %1>>postlist.md
echo cat_main: cat_main>>postlist.md
echo --->>postlist.md
echo 記事一覧を取得できません。>>postlist.md
git add .
git commit -m "prepare cat_main"
git push -u origin gh-pages/cat_main

git checkout master
git checkout -b gh-pages/posts
git push -u origin gh-pages/posts

git checkout master

cd ..\takym.github.io

git submodule add https://github.com/Takym/%1.git blog/%1
cd blog\%1
git fetch
git checkout gh-pages/cat_main
git pull origin gh-pages/cat_main
cd ..\..

git submodule add https://github.com/Takym/%1.git _posts/%1
cd _posts\%1
git fetch
git checkout gh-pages/posts
git pull origin gh-pages/posts
cd ..\..

git submodule add https://github.com/Takym/%1.wiki.git wiki/%1

git submodule sync --recursive
git submodule update --init --recursive
