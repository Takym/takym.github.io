---
layout: post
title: 新しいカテゴリを追加する方法【2025年02月版】
authors: Takym
tags:
  - サイトの管理方針
  - HowTo
category: general
---
Copyright (C) 2025 Takym.

## 概要
`syswiki` から `Nitdefgai` へ移行したお陰で、カテゴリの新設が容易になった。

## 手順０【必須】
* カテゴリ名と目的を決める。

## 手順１【必須】必要なディレクトリの作成
* カテゴリの記事ディレクトリを `/_posts/***/` に作る。
* カテゴリのメインページを `/blog/***/` に作る。
	* `/blog/all/` をコピーして改造する。

## 手順２【任意】ウィキの作成
* ウィキ用のリポジトリを作成する。
* `/wiki/***/` に `https://github.com/Takym/***.wiki.git` へのサブモジュールを追加する。
* `/wiki/README.md`（ウィキ一覧）を更新する。

## 手順4【必須】カテゴリへの案内の作成
* `/_includes/catlist.html` を更新する。
* `/LICENSE.md` の「カテゴリ毎の規約」を更新する。
* `/README.md` の「ブログ記事」と「Blog Articles」を更新する。
