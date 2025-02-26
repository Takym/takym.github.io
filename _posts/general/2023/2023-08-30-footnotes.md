---
layout: post
title: 脚注の動作テスト
authors: Takym
tags:
  - Article
  - HowTo
  - Sample
  - Test
  - テスト
category: general
---
Copyright (C) 2023 Takym.

## ソースコード
```md
* あああ[^hello]いいい。ううう[^world]。

[^hello]: HELLO
[^world]: WORLD

* いくらページの途中に `[^xxx]: xxxxxxxx`[^xxx] を挟んでも必ず最後に表示される[^xxx]。

[^xxx]: xxxxxxxx

* また、使われていない脚注は削除される[^xxx]。

[^yyy]: yyyyyyyy

* [^0]や[^1]、[^2]は数字通りに表示されない。

[^0]: 0番
[^1]: 1番
[^2]: 2番

### 脚注
```

## 表示例
* あああ[^hello]いいい。ううう[^world]。

[^hello]: HELLO
[^world]: WORLD

* いくらページの途中に `[^xxx]: xxxxxxxx`[^xxx] を挟んでも必ず最後に表示される[^xxx]。

[^xxx]: xxxxxxxx

* また、使われていない脚注は削除される[^xxx]。

[^yyy]: yyyyyyyy

* [^0]や[^1]、[^2]は数字通りに表示されない。

[^0]: 0番
[^1]: 1番
[^2]: 2番

### 脚注
