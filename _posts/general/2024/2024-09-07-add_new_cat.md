---
layout: post
title: サブモジュールを用いて新しいカテゴリを追加する【2024年09月版】
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
* `/README.md` を更新する。
* `/wiki/README.md` を更新する。

## 手順5
* `/_includes/repo_url.html` を更新する。
