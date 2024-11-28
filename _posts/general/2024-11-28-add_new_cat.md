---
layout: post
title: サブモジュールを用いて新しいカテゴリを追加する【2024年11月版】
authors: Takym
tags:
  - サイトの管理方針
  - HowTo
category: general
---
Copyright (C) 2024 Takym.

## 手順1
* `/_posts/***` に `https://github.com/Takym/***.git` へのサブモジュールを追加する。

## 手順2
* `/blog/***` に `https://github.com/Takym/***.git` へのサブモジュールを追加する。
* `/_posts/***` とは異なるブランチに設定する。

## 手順3
* `/wiki/***` に `https://github.com/Takym/***.wiki.git` へのサブモジュールを追加する。

## 手順4
* `/LICENSE.md` の「カテゴリ毎の規約」を更新する。
* `/README.md` の「ブログ記事」と「Blog Articles」を更新する。
* `/wiki/README.md`（ウィキ一覧）を更新する。

## 手順5
* `/_includes/repo_url.html` を更新する。

## コマンド
GitHub 上にリポジトリを準備した後に [`create_cat_repo.bat <リポジトリ名>`](https://github.com/Takym/takym.github.io/blob/gh-pages/create_cat_repo.bat) を実行する事で、容易に初期化できる。
