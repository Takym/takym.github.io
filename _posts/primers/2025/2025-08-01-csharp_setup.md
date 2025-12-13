---
layout: post
title: "【初心者向け】プログラミング言語 C# における開発環境の構築方法（.NET 9.0 及び VS Code）"
authors: Takym
tags:
  - .NET
category: primers
---
Copyright (C) 2025 Takym.

## 概要
この記事では、プログラミング言語 C# を用いてソフトウェアを開発する為の環境を構築する方法を解説します。C# は Microsoft によって開発され、サポートされ続けているプログラミング言語です。尚、歴史紹介などは行いませんので、興味のある方はご自身でお調べください。インストール方法に重きを置いております。また、プログラミングする上で分からない事柄は、自分で調べる癖を身に付ける事を強くおすすめします。

## 推奨環境について
Windows 10 または Windows 11 を想定しております。それ以外の OS の場合は、この記事の方法では環境構築する事ができませんので、ご注意ください。

<small>（蛇足：筆者が撮影したスクリーンショットは、[Windows 11 Enterprise の試用版](https://www.microsoft.com/ja-jp/evalcenter/download-windows-11-enterprise)を Hyper-V 上で仮想的に実行したものです。この記事のスクリーンショットの上下にあるメニューとステータスバーは Hyper-V のものです。筆者の Windows 10 のパソコンには既に .NET 9.0 と VS Code がインストールされている為です。x86-64 向けの LTSC の付かない日本語版を選びました。試用版は 90 日間無料で体験できます。）</small>

## ※2025年12月14日追記※
この記事は .NET 9.0 時代に書かれたものですが、.NET 10.0 のインストール方法も .NET 9.0 とほぼ同様ですので、参考になると思います。

## 開発ツール（.NET SDK 9.0）のインストール
先ずは、開発に必要なツール類とランタイム（実行環境）をインストールしましょう。「.NET SDK 9.0」と呼ばれる SDK（Software Development Kit、ソフトウェア開発キット）をインストールすると、ランタイムも同時にインストールされます。.NET は C# と同じく Microsoft によって開発されました。C# で書かれたプログラムを実行するには、基本的には .NET が必要になります。ランタイムが何であり、どの様な動作を行うのかに関しては、解説を省かせて頂きます。「9.0」というのはバージョンを意味しており、これより新しいバージョンが公開されていれば、そちらをインストールしてください。

0. 次のリンクから Microsoft の公式サイトにアクセスしてください：<https://dot.net/>。ページが表示されたら、「**ダウンロード**」ボタンを押下します。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/dotnet_0.png)
1. 「**.NET 9.0**」の方のボタン「**.NET SDK x64 をダウンロードする**」を押下してください。左側にある新しいバージョンを選ぶ様にしてください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/dotnet_1.png)
2. インストーラのダウンロードが終わったら、起動してください。右下にある「**インストール**」ボタンを押下します。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/dotnet_2.png)
3. インストールには管理者権限が必要です。「**このアプリがデバイスに変更を加えることを許可しますか？**」と聞かれたら「**はい**」と答えてください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/dotnet_3.png)
4. すると、インストールが始まります。インストール中は何もしないでください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/dotnet_4.png)
5. インストールが終わると次の様な画面になる筈です。失敗した場合は最初の手順からやり直してみてください。PC の再起動は必要ありません。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/dotnet_5.png)

## テキストエディタ（Visual Studio Code）のインストール
これで .NET を用いたソフトウェアの開発や実行が可能となりましたが、肝心のテキストエディタがありません。メモ帳でも良いのですが、ソフトウェア開発には不向きです。プログラミング言語で記述されたテキストファイル（装飾されない文字列のみのファイル）の事をソースコードと呼びます。ソースコードの編集を支援する機能を持ったテキストエディタを選ぶのが望ましいでしょう。この記事では、C# や .NET と開発元が同じという理由で、Visual Studio Code（VS Code）を選びました。軽量でありながらかなり高機能です。

0. 次のリンクから Microsoft の公式サイトにアクセスしてください：<https://code.visualstudio.com/>。ページの表示は英語ですが、VS Code 自体は日本語化できますので、ご安心ください。「**other platforms**」リンクを押下します。「~~Download for Windows~~」ではない事に注意してください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_0.png)
1. Windows のロゴの下にある「**System Installer**」の「**x64**」を選んでください。画像では上から二番目にあります。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_1.png)
2. インストールには管理者権限が必要です。「**このアプリがデバイスに変更を加えることを許可しますか？**」と聞かれたら「**はい**」と答えてください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_2.png)
3. 「使用許諾契約書」をよく読み同意してください。なお、同意しない場合はインストールできません。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_3.png)
4. 特別な事情が無い限りは、インストール先のディレクトリは既定のまま変更しないでください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_4.png)
5. スタートメニューの設定です。筆者は何も変更しませんでした。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_5.png)
6. 「その他」にある全てのチェックボックスにチェックを入れてください。デスクトップにアイコンを作成するかどうかは好みでお選びください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_6.png)
7. インストールの設定が表示されます。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_7.png)
8. インストールが始まります。インストール中は何もしないでください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_8.png)
9. インストールが終わると次の様な画面になる筈です。失敗した場合は最初の手順からやり直してみてください。PC の再起動は必要ありません。そのまま VS Code を起動してください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_9.png)
10. 正しく起動できる事が確認できましたら、VS Code を日本語化します。左側のバーにある**拡張機能**アイコン（Extensions）を押下してください。正方形が 4 つ並んだ様なアイコンが、恐らく上から 5 番目にある筈です。検索ボックスに「`MS-CEINTL.vscode-language-pack-ja`」と入力し、「**Japanese Language Pack for Visual Studio Code**」を選んでインストール（Install）してください。インストールが完了すると右下に通知が表示されますので、「**Change Language and Restart**」を押下して VS Code を再起動してください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_ex_ja.png)
11. 次に C# の開発支援機能をインストールします。**拡張機能**アイコンを押下し、検索ボックスに「`ms-dotnettools.csdevkit`」と入力し、「**C# Dev Kit**」をインストールしてください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_ex_cs.png)
12. これで VS Code の設定は完了です。

## こんにちは世界
最後に本当にプログラムを実行できるのか試してみましょう。

0. デスクトップに適当な空のディレクトリを作成してください。ディレクトリのアイコンを右クリックすると、Windows 11 の場合は、下図の様なメニューが表示されますので、「**その他のオプションを確認**」を押下してください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_0.png)
1. 「**Code で開く**」を押下してください。VS Code が起動します。なお、Windows 10 の場合は、最初から下図の様なメニューが表示されます。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_1.png)
2. 「**このフォルダー内のファイルの作成者を信頼しますか？**」と尋ねられますので「**はい、作成者を信頼します**」と答えてください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_2.png)
3. 起動後は色々表示されますが、今回は「チュートリアル」や「Copilot」は使いませんので、閉じて構いません。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_3.png)
4. キーボードで「`Ctrl + @`」を同時に押下し、ターミナルを開いてください。ターミナルに「`dotnet new console`」と入力してエンターキーを押してください。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_4.png)
5. すると、幾つかのファイルが作成されます。ファイル一覧が表示されない場合は、左側のバーの一番上にある紙が重なった様になっているアイコンを押下してください。一覧から「`Program.cs`」を選んでダブルクリックすると、ファイルの内容が表示されます。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_5.png)
6. 最後にターミナルに「`dotnet run`」と入力し、このソースコードがどの様に実行されるか試してみましょう。「*Hello, World!*」とだけ表示されれば成功です。
	![C# + .NET 9.0 + VS Code 環境構築](https://takym.github.io/assets/images/primers/csharp/setup/vscode_hello_6.png)
7. .NET 9.0 と VS Code が正常にインストールされている事を確認できましたら、この実験の為に使用したディレクトリは削除しても構いません。

環境構築の手順は以上になります。お疲れ様でした。
