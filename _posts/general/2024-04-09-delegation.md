---
layout: post
title: 「委譲」に似ているもの
authors: Takym
tags:
  - .NET
category: general
---
Copyright (C) 2024 Takym.

<!-- 没題名：「委譲の厳密な定義を確認する」 -->

## 注意事項
* この記事では C# を用いる。
* 「**移**譲」ではなく「**委**譲」について記述する。
	* 読みはどちらも「いじょう」。
* 自分用のメモなので詳しく説明しない。

## 比較

### 基となる型
* この項では次の型を用いる。
	```cs
	public class BaseType
	{
		public int SomeValue { get; init; }

		public BaseType()
		{
			this.SomeValue = 0;
		}

		public int DoSomething(int a, int b)
		{
			return this.SomeValue + a + b + 123;
		}
	}
	```

### 継承
* **型の定義例**
	```cs
	public class Inheritance : BaseType
	{
		public Inheritance()
		{
			this.SomeValue = -123;
		}
	}
	```
* **型の使用例**
	```cs
	// DoSomething は Inheritance の文脈で実行される。
	// （Inheritance の SomeValue の値が使われる）
	var obj = new Inheritance();
	obj.DoSomething(1, 2); // 出力：3
	```
* 本来の意味における「委譲」に限りなく近い動作になる。
	* 表面上は同様と言っても過言ではない。
* 「継承」が無い言語では代わりに「委譲」が用いられる事が多い。
* 大まかな傾向は下記の通り。
	|言語の指向          |採用する機能|
	|:-------------------|:-----------|
	|インターフェース指向|継承        |
	|プロトタイプ指向    |委譲        |

### 転送
* **型の定義例**
	```cs
	public class Forwarding
	{
		private readonly BaseType _owner;

		public int SomeValue { get; init; }

		public SomeValue()
		{
			this.SomeValue = -123;
		}

		public int DoSomething(int a, int b)
		{
			return _owner.DoSomething(a, b);
		}
	}
	```
* **型の使用例**
	```cs
	// DoSomething は BaseType の文脈で実行される。
	// （Forwarding の SomeValue の値は無視され、BaseType の SomeValue が使われる）
	var obj = new Forwarding();
	obj.DoSomething(1, 2); // 出力：126
	```
* これを「委譲」と誤用している場合が多い。
* 日本語では「移譲」と表記できる可能性がある。

### 関数参照
* **型の定義例**
	```cs
	public delegate int FunctionReference(int a, int b);
	```
* **型の使用例**
	```cs
	// 関数の参照は処理を委譲する為に使われる。
	var baseObj = new BaseType() { SomeValue = 4 };
	var funcRef = new FunctionReference(baseObj.DoSomething);
	funcRef(1, 2); // 出力：130
	```
* C# に於いて「委譲」と呼ばれるもの。
* C言語では「関数ポインタ」と呼ばれる。

## Adapter パターン
* C# において「Adapter パターン」を取り扱う時は、「委譲」を「継承」、「転送」、「関数参照」の内のどれであるかを厳密に区別すべきだと考えている。

## シングルトンと関数参照
* シングルトンパターンを使うよりも関数参照の方がコード行数が短くなる。
* ただし、場合によっては処理速度が低下する。
	* C# の `delegate` は一般的に遅いため。
* シングルトンの数が少ない場合は、委譲を用いて共通化せずに、それぞれの型を定義し、動作効率を優先した方が良い。
* 下記の例は、図らずも、本来の意味における「移譲」になっている。

### インターフェース定義
```cs
public interface ISomeInterface
{
	public void DoSomething();
}
```

### 通常のシングルトン
```cs
public sealed class Singleton1 : ISomeInterface
{
	private static readonly Singleton1 _inst = new();

	public static Singleton1 Instance => _inst;

	private Singleton1() { }

	public void DoSomething() { /* ... 任意の処理 ... */ }
}

public sealed class Singleton2 : ISomeInterface
{
	private static readonly Singleton2 _inst = new();

	public static Singleton2 Instance => _inst;

	private Singleton2() { }

	public void DoSomething() { /* ... 任意の処理 ... */ }
}

public sealed class Singleton3 : ISomeInterface
{
	private static readonly Singleton3 _inst = new();

	public static Singleton3 Instance => _inst;

	private Singleton3() { }

	public void DoSomething() { /* ... 任意の処理 ... */ }
}
```

### 移譲を用いる場合（`null` 拒否）
```cs
public sealed class Singletons : ISomeInterface
{
	private readonly DoSomethingFunction _func;

	private static readonly Singleton _inst1 = new(_ => { /* ... 任意の処理 ... */ });
	private static readonly Singleton _inst2 = new(_ => { /* ... 任意の処理 ... */ });
	private static readonly Singleton _inst3 = new(_ => { /* ... 任意の処理 ... */ });

	public static Singleton Instance1 => _inst1;
	public static Singleton Instance2 => _inst2;
	public static Singleton Instance3 => _inst3;

	private Singletons(DoSomethingFunction func)
	{
		ArgumentNullException.ThrowIfNull(func);

		_func = func;
	}

	public void DoSomething() => _func(this);

	private delegate void DoSomethingFunction(Singletons context);
}
```

### 移譲を用いる場合（`null` 許容）
```cs
public sealed class Singletons : ISomeInterface
{
	private readonly DoSomethingFunction? _func;

	private static readonly Singleton _inst1 = new(_ => { /* ... 任意の処理 ... */ });
	private static readonly Singleton _inst2 = new(_ => { /* ... 任意の処理 ... */ });
	private static readonly Singleton _inst3 = new(_ => { /* ... 任意の処理 ... */ });

	public static Singleton Instance1 => _inst1;
	public static Singleton Instance2 => _inst2;
	public static Singleton Instance3 => _inst3;

	private Singletons(DoSomethingFunction? func)
	{
		_func = func;
	}

	public void DoSomething() => _func?.Invoke(this);

	private delegate void DoSomethingFunction(Singletons context);
}
```

## 参考文献
* [【C#】インターフェイスの変換を行うAdapterパターンを学ぶ - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2021/03/18/120000)
* [プログラマーを惑わせる３種類の委譲(委譲・Delegation／転送・Forwarding／.NET Delegates) #JavaScript - Qiita](https://qiita.com/jesus_isao/items/4b6b7846ccf5eb46b1bc)
* [【オブジェクト指向】移譲じゃないよ、委譲だよ！ #オブジェクト指向 - Qiita](https://qiita.com/tatsumi_t2/items/b9dd10a4e4929fee3eff)
