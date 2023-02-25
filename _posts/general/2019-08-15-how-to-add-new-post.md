---
layout: post
title: 記事の追加方法
tags:
  - Article
  - HowTo
  - Sample
authors:
  - Takym
---
記事を追加するには、`_posts` ディレクトリに記事ファイルを作成します。
Markdown で記述する場合は、ファイル名は `yyyy-mm-dd-title.md` の様なフォーマットにします。
HTML の場合は `yyyy-mm-dd-title.html` になります。
`title` の部分は記事のアドレス上の名前になります。
ファイルの先頭には以下の記述を必ずしてください。
```yml
---
layout: post
title: 記事の題名
tags:
  - タグ1
  - タグ2
  - タグ3
authors:
  - 編集者1
  - 編集者2
  - 編集者3
---
```
