---
layout: post
title: "ブートローダーの開発【x86 系の Legacy BIOS】"
authors: Takym
tags:
  - 低レイヤ
category: primers
---
Copyright (C) 2026 Takym.

## 概要
この記事では、x86 系の Legacy BIOS 上で動作するブートローダーを開発します。ブートローダーは、コンピュータに電源が入った時に、BIOS によって呼び出され、オペレーティング・システム（OS、Operating System）を起動する責務を負います。

### 基本概念
Windows や Linux 等の OS を起動できるコンピュータは、IBM PC/AT 互換機とよく呼称されています。IBM PC/AT 互換機の中央処理装置（CPU、Central Processing Unit）には、Intel 社や AMD 社の x86 系が採用されています。x86 系の命令セットを調べる時は、英語で書かれていますが「[Intel® 64 and IA-32 Architectures Software Developer Manuals](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)」を推奨します。「Instruction Set Reference」を探して PDF ファイルをダウンロードしてください。また、この記事で用いるアセンブリ言語は [NASM](https://www.nasm.us/) ですが、他の言語で試す事に挑戦して頂いても構いません。アセンブリ言語とは、機械語の命令と一対一に対応している人間可読なプログラミング言語です。機械語は、CPU が直接的に解釈する事のできる言語を指します。基本的には、Windows で開発する事を想定していますが、NASM が動作する環境であれば、他の OS でも構いません。この記事で開発するブートローダーは、Legacy BIOS を前提としますが、実はこれは古い技術ですのでご注意ください。近年では UEFI BIOS が普及しています。BIOS は、Basic Input/Output System の略で、基本的な入出力機能をブートローダーに提供するものです。「Legacy」には「遺産」などという意味合いがあります。一方、UEFI は、Unified Extensible Firmware Interface（統一拡張可能ファームウェアインターフェース）の略です。この記事では UEFI については説明しません。

### 起動ディスクの判定とブートローダーの読み込み
コンピュータに電源が入ると、マザーボード上のメモリから BIOS のプログラムを呼び出し、POST（Power On Self Test）と呼ばれる自己診断処理や初期化処理を実行します。必要な処理が終わると、今度は起動ディスクを捜索します。各ディスクの先頭の 1 セクタを読み取ります。1 セクタは 512 バイトです<small>（機種や環境によっては別の大きさとなる場合もあります）</small>。セクタ内の最後の 2 バイトを確認します。`0xAA55` と一致した場合に、起動ディスクと見做します。この数値はブート署名やブートフラグなどと呼ばれます。複数の起動ディスクを発見した場合は、利用者が設定した優先順位に従って、一つの起動ディスクを決定します。起動ディスクの先頭セクタ（MBR、Master Boot Record）は、メモリ上の `0x7C00` へ転送されます。中途半端な位置だと思うかもしれませんが、歴史的に紆余曲折あってこの値に決められました。詳しくは <https://msakamoto-sf.github.io/oldwebarchive/glamenv-septzen/view-614.html> が参考になります。MBR の転送が終わると、BIOS は `0x7C00` に制御を移します。ブートローダーは、MBR に格納されるのです。

### MBR の形式
実は、MBR には複数の種類があります。ここでは代表的な二つの形式を簡易的に紹介します。

* ディスクを分割せず、FAT ファイルシステムを採用する場合は、先頭の 90 バイトに BIOS Parameter Block と呼ばれるデータを配置しなければなりません。詳細は <https://elm-chan.org/docs/fat.html> をご参照ください。
* ディスクを複数のパーティションに分割する場合は、つまり一つの物理的なドライブを複数の論理的なドライブがあるものとして扱う場合は、ブート署名の直前の 64 バイト（ブート署名を合わせると、MBR の末尾の 66 バイト）にパーティションテーブルを配置しなければなりません。英語の資料になりますが、<https://wiki.osdev.org/Partition_Table> が参考になります。日本語資料としては[ウィキペディアの MBR の記事](https://ja.wikipedia.org/wiki/マスターブートレコード)が役立つでしょう。尚、「GUID パーティションテーブル」と呼ばれるものもありますが、こちらで扱う「パーティションテーブル」は「GUID パーティションテーブル」ではありませんので、混同しない様にご注意ください。

今回はどちらの形式にも柔軟に対応できる様にします。前述の通り MBR はたった 512 バイトしかありませんので、工夫が必要になります。

## 初期プログラムローダーの実装
<!-- TODO: Initial Program Loader について執筆する -->

## デバッグ

### VirtualBox を用いた場合
<!-- TODO: 執筆する -->

### WSL + QEMU を用いた場合
<!-- TODO: 執筆する -->

## osdev-jp の紹介
ブートローダーや OS 等の開発に行き詰った時に相談できるコミュニティがあります。[osdev-jp](https://osdev.jp) には低レイヤプログラミングに詳しい方々が集まっております。私も参加しております。osdev-jp の Discord では初心者向けの相談も行われています。この記事に疑問がありましたら、osdev-jp に参加する事を是非検討してみてください。

尚、当サイトのメニューにある「Takym Server」とは運営元の異なるコミュニティですのでご注意ください。

勿論、[このリポジトリの GitHub Discussions](https://github.com/Takym/takym.github.io/discussions/categories/q-a) や Takym Server<small>（しかし、現時点では、悲しい事に正式な参加者は私のみです）</small>でも質問を受け付けていますが、osdev-jp には OS 開発の専門家も多く確実に回答を得られるかと思います。

osdev-jp と似た名称の [OSDev.org](https://wiki.osdev.org/Expanded_Main_Page) と呼ばれるコミュニティもありますが、こちらは英語圏の OS 開発のコミュニティです。双方に公式的な関係はありません。
