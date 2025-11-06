export interface Page {
  title: string;
  description: string;
  exercise: string;
  initialHtml: string;
  initialCss: string;
  initialJs: string;
}

export interface Course {
  id: string;
  title: string;
  chapter: string;
  pages: Page[];
}

export const courses: Course[] = [
  // =================================================================
  // Chapter 1: HTMLの基本
  // =================================================================
  {
    id: "html-basic-structure",
    chapter: "HTMLの基本",
    title: "HTML基本構造",
    pages: [
      {
        title: "HTMLとは？Webページの仕組み",
        description:
          "HTML (HyperText Markup Language) は、ウェブページの骨格を作るための言語です。テキスト、画像、リンクなどの要素を「タグ」で囲むことで、ウェブページの構造を定義します。ブラウザはこのHTMLファイルを解釈して、私たちが見ているようなウェブページを表示します。",
        initialHtml: "<h1>こんにちは、HTML！</h1>",
        initialCss: "h1 { color: #3b82f6; }",
        initialJs: "",
        exercise:
          "`<h1>`タグのテキストを「私の最初のウェブページ」に変更してみましょう。",
      },
      {
        title: "HTML文書の基本構造",
        description:
          "すべてのHTML文書は基本的な構造を持っています。`<!DOCTYPE html>`で文書の種類を宣言し、`<html>`タグが全体を囲みます。`<head>`にはページのタイトルや文字コードなどのメタ情報を、`<body>`には実際にブラウザに表示されるコンテンツを記述します。",
        initialHtml: `<!DOCTYPE html>
<html>
<head>
  <title>ページのタイトル</title>
</head>
<body>
  <p>ここにコンテンツが表示されます。</p>
</body>
</html>`,
        initialCss: "body { font-family: sans-serif; }",
        initialJs: "",
        exercise:
          "`<title>`タグのテキストを「自己紹介ページ」に書き換えて、ブラウザのタブに表示されるタイトルを変えてみましょう。",
      },
      {
        title: "基本的なタグ",
        description:
          "`<h1>`～`<h6>`は見出し、`<p>`は段落、`<a>`はリンク、`<img>`は画像を表します。`<div>`と`<span>`は特別な意味を持たない汎用的なタグで、主にCSSでスタイルを適用するために使われます。`<div>`はブロックレベル要素、`<span>`はインライン要素という違いがあります。",
        initialHtml: `<h1>主要な見出し</h1>
<p>これは<a href="#">リンク付き</a>の段落です。</p>
<div>
<img src="https://placehold.co/200x100" alt="ダミー画像">
</div>`,
        initialCss:
          "div { border: 1px solid #ccc; padding: 10px; margin-top: 10px; }",
        initialJs: "",
        exercise:
          '`<a>`タグの`href`属性を`"https://www.google.com"`に、テキストを「Google」に変更して、実際にGoogleへのリンクを作成してみましょう。',
      },
      {
        title: "リストとテーブル",
        description:
          "順序のないリストは`<ul>`と`<li>`で、順序のあるリストは`<ol>`と`<li>`で作成します。テーブル（表）は`<table>`で全体を囲み、`<tr>`で行を、`<th>`で見出しセルを、`<td>`でデータセルを定義します。",
        initialHtml: `<h4>買い物リスト</h4>
<ul>
<li>りんご</li>
<li>バナナ</li>
</ul>

<h4>今日のスケジュール</h4>
<ol>
<li>朝食</li>
<li>勉強</li>
</ol>`,
        initialCss: "ul, ol { padding-left: 20px; }",
        initialJs: "",
        exercise: "買い物リストに`<li>牛乳</li>`を追加してみましょう。",
      },
      {
        title: "フォーム要素",
        description:
          "フォームはユーザーからの入力を受け取るための要素です。`<form>`で全体を囲み、`<input>`で一行テキストやパスワード、チェックボックスなど様々な入力欄を、`<textarea>`で複数行のテキスト入力を、`<button>`で送信ボタンを作成します。",
        initialHtml: `<form>
<label for="name">名前:</label>
<input type="text" id="name" name="name">
<br><br>
<button type="submit">送信</button>
</form>`,
        initialCss:
          "input, button { padding: 5px; border-radius: 4px; border: 1px solid #ccc; }",
        initialJs: "",
        exercise:
          '送信ボタンの前に、`<textarea name="message"></textarea>`を追加して、メッセージ入力欄を作成してみましょう。',
      },
    ],
  },
  {
    id: "html-semantics",
    chapter: "HTMLの基本",
    title: "HTMLセマンティクス",
    pages: [
      {
        title: "セマンティックHTML",
        description:
          "セマンティックHTMLとは、タグが持つ「意味」を正しく使い分けることです。例えば、`<header>`はページのヘッダー、`<nav>`はナビゲーション、`<main>`は主要コンテンツ、`<footer>`はフッターといったように、適切なタグを使うことで、検索エンジンや支援技術がページの構造を理解しやすくなります。",
        initialHtml: `<header>
<h1>サイトタイトル</h1>
</header>
<main>
<p>主要なコンテンツ</p>
</main>
<footer>
<p>&copy; 2024 MySite</p>
</footer>`,
        initialCss:
          "header, footer { background: #f1f5f9; padding: 10px; text-align: center; }",
        initialJs: "",
        exercise:
          "`<main>`タグの中に、`<article><h2>記事タイトル</h2><p>記事の内容...</p></article>`を追加して、一つの独立した記事を表現してみましょう。",
      },
      {
        title: "アクセシビリティの基本",
        description:
          "ウェブアクセシビリティは、誰もがウェブサイトを快適に利用できるようにするための考え方です。`<img>`タグの`alt`属性は、画像が表示されない時やスクリーンリーダーが読み上げるための代替テキストです。`aria-label`属性は、要素にスクリーンリーダー用のラベルを追加するために使います。",
        initialHtml:
          '<img src="https://placehold.co/150x150" alt="青い四角形のプレースホルダー画像">\n<button aria-label="閉じる">X</button>',
        initialCss: "button { font-weight: bold; }",
        initialJs: "",
        exercise: "`alt`属性の内容を「サンプル画像」に書き換えてください。",
      },
      {
        title: "メタタグ",
        description:
          '`<head>`内に記述するメタタグは、ブラウザや検索エンジンにページの情報を提供します。`<title>`はページのタイトル、`<meta name="description">`はページの説明、`<meta name="viewport">`はレスポンシブデザインに不可欠な設定です。',
        initialHtml: `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>メタタグの学習</title>
<meta name="description" content="これは学習用のページです。">
</head>`,
        initialCss: "/* CSSは不要です */",
        initialJs: "",
        exercise:
          '`<meta name="description">`の`content`属性を「HTMLのメタタグについて学んでいます。」に変更してみましょう。',
      },
      {
        title: "HTML5の新要素",
        description:
          "HTML5では、より意味が明確になる新しい要素が追加されました。`<audio>`や`<video>`は音声や動画を埋め込むためのタグです。`<figure>`と`<figcaption>`は、図版（画像や図表）とそのキャプションをグループ化するために使います。",
        initialHtml: `<figure>
<img src="https://placehold.co/300x150" alt="図版">
<figcaption>図1: これはサンプル図版です。</figcaption>
</figure>

<video controls width="300">
<source src="" type="video/mp4">
ブラウザが動画の表示に対応していません。
</video>`,
        initialCss: "figure { border: 1px solid #e2e8f0; padding: 10px; }",
        initialJs: "",
        exercise:
          "`<figcaption>`のテキストを「サンプル画像のキャプション」に変更してみましょう。",
      },
    ],
  },
  // =================================================================
  // Chapter 2: CSSの基礎
  // =================================================================
  {
    id: "css-basics",
    chapter: "CSSの基礎",
    title: "CSSの基本",
    pages: [
      {
        title: "CSSとは？",
        description:
          "CSS (Cascading Style Sheets) は、HTML要素の見た目を装飾するための言語です。セレクタでスタイルを適用する対象を指定し、プロパティと値で具体的なスタイル（色、サイズ、レイアウトなど）を定義します。",
        initialHtml: "<h1>CSSの学習</h1>",
        initialCss: `h1 {
color: white;
background-color: #0ea5e9;
padding: 16px;
}`,
        initialJs: "",
        exercise:
          "`background-color`の値を`#ef4444`（赤色）に変更してみましょう。",
      },
      {
        title: "セレクタ",
        description:
          "セレクタは、スタイルを適用するHTML要素を指定します。要素名（`p`）、クラス名（`.classname`）、ID名（`#idname`）が基本です。疑似クラス（例: `:hover`）を使うと、特定の状態（マウスが乗っている時など）の要素にスタイルを適用できます。",
        initialHtml: `<p class="highlight">これはクラスセレクタの例です。</p>
<p id="unique">これはIDセレクタの例です。</p>
<a href="#">ホバーしてください</a>`,
        initialCss: `.highlight {
color: #be123c;
}
#unique {
font-weight: bold;
}
a:hover {
color: #16a34a;
}`,
        initialJs: "",
        exercise:
          "`.highlight`セレクタに`background-color: #fee2e2;`を追加して、背景色を薄い赤色にしてみましょう。",
      },
      {
        title: "セレクタ（組み合わせ）",
        description:
          "セレクタは組み合わせて、より具体的にスタイルを適用する対象を指定できます。「子孫セレクタ」（例: `.container p`）は、特定の要素の中にあるすべての子孫要素を指定します。「子セレクタ」（例: `.container > p`）は、特定の要素の直下にある子要素のみを指定します。",
        initialHtml: `<div class="container">
<p>これはコンテナの直下にあるpタグです。（子要素）</p>
<div>
  <p>これはコンテナの子のdivの中にあるpタグです。（孫要素）</p>
</div>
</div>`,
        initialCss: `/* 子孫セレクタ: .container の中にある全ての p */
.container p {
border: 1px solid blue;
padding: 5px;
margin: 5px;
}

/* 子セレクタ: .container の直下にある p のみ */
/*
.container > p {
font-weight: bold;
background-color: #e0f2fe;
}
*/`,
        initialJs: "",
        exercise:
          "コメントアウトされている「子セレクタ」のCSS（`.container > p { ... }`）のコメントを解除して、直下の子要素だけにスタイルが適用されることを確認してみましょう。",
      },
      {
        title: "ボックスモデル",
        description:
          "すべてのHTML要素は長方形のボックスと見なすことができます。ボックスは、コンテンツ（`content`）、内側の余白（`padding`）、境界線（`border`）、外側の余白（`margin`）の4つの領域で構成されています。",
        initialHtml: '<div class="box">ボックスモデルのテスト</div>',
        initialCss: `.box {
width: 200px;
padding: 20px;
border: 5px solid #1d4ed8;
margin: 30px;
background-color: #e0e7ff;
}`,
        initialJs: "",
        exercise:
          "`.box`の`padding`を`40px`に変更して、内側の余白を広げてみましょう。",
      },
      {
        title: "色とフォント",
        description:
          "`color`で文字色を、`background-color`で背景色を指定します。色は16進数（`#RRGGBB`）や`rgb()`、`hsl()`などで指定できます。フォント関連では`font-family`で書体、`font-size`で大きさ、`font-weight`で太さ、`line-height`で行の高さを設定します。",
        initialHtml:
          '<p class="text-sample">フォントと色の設定を学びます。</p>',
        initialCss: `.text-sample {
color: rgb(255, 255, 255);
background-color: #334155;
font-family: "Georgia", serif;
font-size: 18px;
line-height: 1.5;
}`,
        initialJs: "",
        exercise:
          "`.text-sample`の`font-size`を`24px`に、`font-weight`を`bold`に設定してみましょう。",
      },
    ],
  },
  // =================================================================
  // Chapter 3: CSSレイアウト
  // =================================================================
  {
    id: "css-layout-basics",
    chapter: "CSSレイアウト",
    title: "レイアウトの基礎",
    pages: [
      {
        title: "Displayプロパティ",
        description:
          "`display`プロパティは、要素の表示形式を決定します。`block`は幅いっぱいに広がる箱、`inline`はテキストの一部のように振る舞う箱、`inline-block`はその中間的な性質を持ちます。`none`は要素を非表示にします。",
        initialHtml: `<div class="block">ブロック</div>
<span class="inline">インライン</span>
<div class="inline-block">インラインブロック</div>`,
        initialCss: `div, span { padding: 10px; margin: 5px; }
.block { background: #fecaca; }
.inline { background: #dbeafe; }
.inline-block { background: #d1fae5; width: 150px; height: 50px; }`,
        initialJs: "",
        exercise:
          "`.block`に`display: none;`を追加して、要素が非表示になることを確認してみましょう。",
      },
      {
        title: "Positionプロパティ",
        description:
          "`position`プロパティは、要素の配置方法を指定します。`static`が初期値です。`relative`は元の位置を基準に、`absolute`は親要素を基準に配置します。`fixed`はウィンドウを基準に固定され、スクロールしても動きません。",
        initialHtml: `<div class="container">
<div class="box static">static</div>
<div class="box relative">relative</div>
<div class="box absolute">absolute</div>
<div class="box fixed">fixed</div>
</div>`,
        initialCss: `.container { position: relative; height: 200px; border: 2px solid #ccc; }
.box { width: 80px; height: 80px; color: white; text-align: center; line-height: 80px; }
.static { background: #9ca3af; }
.relative { background: #60a5fa; top: 20px; left: 20px; }
.absolute { background: #ef4444; position: absolute; top: 40px; right: 40px; }
.fixed { background: #10b981; position: fixed; bottom: 10px; right: 10px; }`,
        initialJs: "",
        exercise:
          "`.relative`に`position: relative;`を追加して、`top`と`left`が効くようにしてみましょう。",
      },
      {
        title: "Flexbox基礎",
        description:
          "Flexboxは、要素を一行または一列に並べ、柔軟に配置するためのレイアウトモデルです。親要素に`display: flex;`を指定し、`justify-content`で主軸方向（横）の、`align-items`で交差軸方向（縦）の配置を制御します。",
        initialHtml: `<div class="flex-container">
<div>1</div>
<div>2</div>
<div>3</div>
</div>`,
        initialCss: `.flex-container {
display: flex;
justify-content: space-around;
align-items: center;
height: 100px;
background-color: #f3f4f6;
}
.flex-container div {
width: 50px; height: 50px; background-color: #3b82f6;
color: white; text-align: center; line-height: 50px;
}`,
        initialJs: "",
        exercise:
          "`.flex-container`の`justify-content`を`center`に変更して、アイテムを中央に寄せてみましょう。",
      },
      {
        title: "CSS Grid基礎",
        description:
          "CSS Gridは、二次元（行と列）のレイアウトを簡単に作成できる強力なシステムです。親要素に`display: grid;`を指定し、`grid-template-columns`で列の幅を、`grid-gap`でアイテム間の隙間を定義します。",
        initialHtml: `<div class="grid-container">
<div class="item">A</div>
<div class="item">B</div>
<div class="item">C</div>
<div class="item">D</div>
</div>`,
        initialCss: `.grid-container {
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
}
.item {
background-color: #8b5cf6;
color: white;
padding: 20px;
text-align: center;
}`,
        initialJs: "",
        exercise:
          "`.grid-container`の`grid-template-columns`を`1fr 1fr 1fr`に変更して、3列のレイアウトにしてみましょう。",
      },
    ],
  },
  {
    id: "css-responsive-design",
    chapter: "CSSレイアウト",
    title: "レスポンシブデザイン",
    pages: [
      {
        title: "メディアクエリ",
        description:
          "メディアクエリは、画面の幅や高さなどの条件に応じて適用するCSSを切り替える仕組みです。`@media (max-width: 600px) { ... }`のように記述し、画面幅が600px以下の場合に特定のスタイルを適用できます。",
        initialHtml:
          '<div class="box">画面幅に応じて背景色が変わります。</div>',
        initialCss: `.box {
padding: 20px;
background-color: #3b82f6; /* デフォルトは青 */
color: white;
}
/* 画面幅が768px以下の場合 */
@media (max-width: 768px) {
.box {
  background-color: #16a34a; /* 緑色に変わる */
}
}`,
        initialJs: "",
        exercise:
          "画面幅が480px以下の場合に背景色が`#ef4444`（赤色）になるように、新しいメディアクエリを追加してみましょう。",
      },
      {
        title: "モバイルファーストデザイン",
        description:
          "モバイルファーストとは、まずスマートフォンなどの小さい画面向けのスタイルを基本として作り、メディアクエリを使って大きい画面向けのスタイルを追加していく設計手法です。これにより、モバイルユーザーにとって最適な表示を保証しやすくなります。",
        initialHtml: '<div class="container">モバイルファースト</div>',
        initialCss: `/* モバイル向け（基本スタイル） */
.container {
width: 100%;
background-color: #fde68a;
padding: 10px;
}

/* タブレット以上（画面幅が600px以上） */
@media (min-width: 600px) {
.container {
  width: 80%;
  margin: 0 auto;
  background-color: #a7f3d0;
}
}`,
        initialJs: "",
        exercise:
          "画面幅が900px以上の時に、`.container`の背景色が`#bfdbfe`（薄い青）になるメディアクエリを追加してみましょう。",
      },
      {
        title: "相対単位",
        description:
          "レスポンシブデザインでは、固定値（`px`）よりも相対単位を使うことが推奨されます。`%`は親要素に対する割合、`em`は親要素のフォントサイズ基準、`rem`はルート要素（html）のフォントサイズ基準、`vw` `vh`はビューポートの幅/高さに対する割合です。",
        initialHtml: `<div class="parent">
<div class="child">相対単位のテスト</div>
</div>`,
        initialCss: `.parent {
width: 80vw; /* ビューポート幅の80% */
font-size: 16px;
border: 1px solid #ccc;
}
.child {
width: 50%; /* 親要素の幅の50% */
font-size: 1.2rem; /* ルートのフォントサイズの1.2倍 */
padding: 1em; /* この要素のフォントサイズの1倍 */
}`,
        initialJs: "",
        exercise:
          "`.parent`の`width`を`90vw`に、`.child`の`width`を`75%`に変更してみましょう。",
      },
    ],
  },
  // =================================================================
  // Chapter 4: JavaScriptの基本
  // =================================================================
  {
    id: "js-basic-syntax",
    chapter: "JavaScriptの基本",
    title: "JavaScript基本文法",
    pages: [
      {
        title: "JavaScriptとは？",
        description:
          "JavaScriptは、ウェブページに動きや対話性を加えるためのプログラミング言語です。HTMLやCSSと連携し、ユーザーのアクションに応じてコンテンツを動的に変更したり、サーバーと通信したりすることができます。",
        initialHtml: '<button id="myButton">クリックして</button>',
        initialCss: "button { padding: 10px 15px; }",
        initialJs: 'console.log("JavaScriptが読み込まれました！");',
        exercise:
          "`console.log()`の中のメッセージを「Hello, JavaScript!」に変更して、コンソールに出力される内容を変えてみましょう。",
      },
      {
        title: "変数宣言とデータ型",
        description:
          "変数は、データを格納するための名前付きの箱です。`let`（再代入可能）や`const`（再代入不可）を使って宣言します。JavaScriptには、文字列（String）、数値（Number）、真偽値（Boolean）、配列（Array）、オブジェクト（Object）などの基本的なデータ型があります。",
        initialHtml: "<!-- HTMLは空でOK -->",
        initialCss: "/* CSSは不要です */",
        initialJs: `const name = "山田";
let age = 25;
const isStudent = true;

console.log(name);
console.log(age);`,
        exercise:
          "`age`の値を`30`に再代入するコード（`age = 30;`）を追加し、`console.log(age);`で値が変わったことを確認してみましょう。",
      },
      {
        title: "演算子と条件分岐",
        description:
          "算術演算子（`+`, `-`, `*`, `/`）や比較演算子（`>`, `<`, `===`）を使って計算や比較ができます。`if`文を使うと、条件が真（true）の場合にのみ特定の処理を実行できます。",
        initialHtml: "<!-- HTMLは空でOK -->",
        initialCss: "/* CSSは不要です */",
        initialJs: `const score = 85;

if (score >= 80) {
console.log("合格です！");
} else {
console.log("不合格です。");
}`,
        exercise:
          "`score`の値を`70`に変更して、コンソールに出力されるメッセージが「不合格です。」に変わることを確認してください。",
      },
      {
        title: "繰り返し処理",
        description:
          "`for`ループは、指定した回数だけ処理を繰り返すために使います。配列の各要素に対して処理を行いたい場合は、`forEach`メソッドが便利です。",
        initialHtml: "<!-- HTMLは空でOK -->",
        initialCss: "/* CSSは不要です */",
        initialJs: `const fruits = ["りんご", "バナナ", "みかん"];

// forループの例
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

// forEachの例
fruits.forEach(function(fruit) {
console.log(fruit);
});`,
        exercise:
          '`fruits`配列に`"ぶどう"`を追加して、繰り返し処理で4つの果物名が出力されるようにしてください。',
      },
    ],
  },
  // =================================================================
  // Chapter 5: JavaScriptの応用
  // =================================================================
  {
    id: "js-dom-manipulation",
    chapter: "JavaScriptの応用",
    title: "DOM操作",
    pages: [
      {
        title: "DOMとは？",
        description:
          "DOM (Document Object Model) は、HTML文書をオブジェクトのツリー構造として表現したものです。JavaScriptを使ってこのDOMを操作することで、HTMLの要素を取得したり、内容やスタイルを変更したりできます。",
        initialHtml: '<h1 id="title">DOMの学習</h1>',
        initialCss: "",
        initialJs:
          'const titleElement = document.getElementById("title");\nconsole.log(titleElement);',
        exercise:
          "`console.log`で`titleElement`のテキスト内容（`textContent`プロパティ）を出力してみましょう。",
      },
      {
        title: "要素の取得と操作",
        description:
          "`document.getElementById()`や`document.querySelector()`でHTML要素を取得できます。取得した要素の`textContent`や`innerHTML`プロパティでテキスト内容を、`style`プロパティでCSSを変更できます。",
        initialHtml: '<p id="message">ここが変わります。</p>',
        initialCss: "#message { color: red; }",
        initialJs: `const message = document.getElementById("message");

// テキストを変更
message.textContent = "JavaScriptで変更しました！";

// スタイルを変更
message.style.color = "blue";
message.style.fontSize = "20px";`,
        exercise:
          '`message.style.backgroundColor = "yellow";`を追加して、背景色を黄色に変更してみましょう。',
      },
      {
        title: "イベント処理",
        description:
          "`addEventListener`を使うと、要素に対するユーザーのアクション（イベント）を監視し、特定のアクションが発生した時に処理を実行できます。例えば、ボタンがクリックされた時（`click`イベント）に関数を実行できます。",
        initialHtml:
          '<button id="actionButton">クリック！</button>\n<p id="result"></p>',
        initialCss: "",
        initialJs: `const button = document.getElementById("actionButton");
const result = document.getElementById("result");

button.addEventListener("click", function() {
result.textContent = "ボタンがクリックされました！";
});`,
        exercise:
          'ボタンがクリックされた時に、`result`のテキストではなく、`alert("クリックされました！");`でアラートが表示されるように変更してみましょう。',
      },
      {
        title: "要素の追加・削除",
        description:
          "`document.createElement()`で新しいHTML要素を作成し、`appendChild()`で既存の要素の子要素として追加できます。`removeChild()`で要素を削除することも可能です。",
        initialHtml:
          '<ul id="list"><li>最初のアイテム</li></ul>\n<button id="addButton">追加</button>',
        initialCss: "",
        initialJs: `const list = document.getElementById("list");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {
// 新しいli要素を作成
const newItem = document.createElement("li");
newItem.textContent = "新しいアイテム";

// ul要素にli要素を追加
list.appendChild(newItem);
});`,
        exercise:
          "追加される新しいアイテムのテキストが「追加されたアイテム」になるように、`newItem.textContent`の値を変更してください。",
      },
    ],
  },
  {
    id: "js-practical",
    chapter: "JavaScriptの応用",
    title: "実用的なJavaScript",
    pages: [
      {
        title: "関数の定義と呼び出し",
        description:
          "関数は、一連の処理をまとめたものです。`function`キーワードやアロー関数（`=>`）で定義し、関数名を呼び出すことで実行できます。引数（ひきすう）を使って関数に値を渡し、`return`で結果を返すことができます。",
        initialHtml: "<!-- HTMLは空でOK -->",
        initialCss: "/* CSSは不要です */",
        initialJs: `// 関数の定義
function greet(name) {
return "こんにちは、" + name + "さん！";
}

// 関数の呼び出し
const message = greet("鈴木");
console.log(message);`,
        exercise:
          '`greet("佐藤")`を呼び出し、その結果をコンソールに出力するコードを追加してください。',
      },
      {
        title: "非同期処理の基礎",
        description:
          "非同期処理は、時間のかかる処理（例: サーバーとの通信）を待っている間に他の処理を進めるための仕組みです。`setTimeout`は、指定した時間後に関数を実行する最も簡単な非同期処理の例です。",
        initialHtml: "<!-- HTMLは空でOK -->",
        initialCss: "/* CSSは不要です */",
        initialJs: `console.log("処理を開始します。");

setTimeout(function() {
console.log("3秒後にこのメッセージが表示されます。");
}, 3000); // 3000ミリ秒 = 3秒

console.log("処理を終了します。");`,
        exercise:
          "`setTimeout`の待ち時間を`1000`ミリ秒（1秒）に変更してみましょう。",
      },
      {
        title: "エラーハンドリング",
        description:
          "`try...catch`文を使うと、プログラムの実行中に発生する可能性のあるエラー（例外）を捕捉し、エラーが発生してもプログラムが停止しないように対処できます。",
        initialHtml: "<!-- HTMLは空でOK -->",
        initialCss: "/* CSSは不要です */",
        initialJs: `try {
console.log("tryブロックの処理を開始します。");
// 意図的にエラーを発生させる
nonExistentFunction(); 
console.log("この行は実行されません。");
} catch (error) {
console.error("エラーが発生しました:", error.message);
} finally {
console.log("finallyブロックは常に実行されます。");
}`,
        exercise:
          "`nonExistentFunction();`をコメントアウトして、エラーが発生しない場合に`catch`ブロックが実行されないことを確認してみましょう。",
      },
      {
        title: "ローカルストレージの使用",
        description:
          "ローカルストレージは、ユーザーのブラウザにデータを保存するための仕組みです。`localStorage.setItem(key, value)`でデータを保存し、`localStorage.getItem(key)`で取得します。保存したデータはブラウザを閉じても消えません。",
        initialHtml: `<input type="text" id="memo" placeholder="メモを入力">
<button id="saveButton">保存</button>`,
        initialCss: "",
        initialJs: `const memoInput = document.getElementById("memo");
const saveButton = document.getElementById("saveButton");

// 保存ボタンがクリックされた時の処理
saveButton.addEventListener("click", function() {
localStorage.setItem("userMemo", memoInput.value);
alert("メモを保存しました！");
});

// ページ読み込み時に保存されたメモを表示
const savedMemo = localStorage.getItem("userMemo");
if (savedMemo) {
memoInput.value = savedMemo;
}`,
        exercise:
          '`localStorage.setItem`で保存するキーを`"userMemo"`から`"myNote"`に変更してみましょう。（一度保存した後にキーを変えると、以前のデータは読み込まれなくなります）',
      },
    ],
  },
  // =================================================================
  // Chapter 6: 総まとめプロジェクト
  // =================================================================
  {
    id: "project-profile",
    chapter: "総まとめプロジェクト",
    title: "プロフィールカード作成",
    pages: [
      {
        title: "1. HTMLで骨格を作る",
        description:
          "これまでの知識を総動員して、簡単な自己紹介カードを作ります。まずはHTMLで必要な要素（画像、名前、自己紹介文、SNSリンク）を配置しましょう。",
        initialHtml: `<div class="card">
  <img src="https://placehold.co/100x100" alt="プロフィール画像">
  <h1>山田 太郎</h1>
  <p>Web開発を勉強中のフロントエンドエンジニアです。</p>
  <ul>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">GitHub</a></li>
  </ul>
</div>`,
        initialCss: "",
        initialJs: "",
        exercise:
          'リストの3つ目の項目として、`<li><a href="#">ブログ</a></li>`を追加してみましょう。',
      },
      {
        title: "2. CSSで装飾する",
        description:
          "次に、CSSでカードの見た目を整えます。ボックスモデル、色、フォントの知識を使います。",
        initialHtml: `<div class="card">
  <img src="https://placehold.co/100x100" alt="プロフィール画像">
  <h1>山田 太郎</h1>
  <p>Web開発を勉強中のフロントエンドエンジニアです。</p>
  <ul>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">GitHub</a></li>
  </ul>
</div>`,
        initialCss: `body {
  background-color: #f0f4f8;
  font-family: sans-serif;
}
.card {
  width: 300px;
  margin: 50px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
}`,
        initialJs: "",
        exercise:
          "`.card`に`text-align: center;`を追加して、カード内の要素をすべて中央揃えにしてみましょう。",
      },
      {
        title: "3. Flexboxでレイアウト",
        description:
          "最後に、Flexboxを使ってSNSリンクを横並びにします。これでプロジェクトは完成です！",
        initialHtml: `<div class="card">
  <img src="https://placehold.co/100x100" alt="プロフィール画像">
  <h1>山田 太郎</h1>
  <p class="job-title">フロントエンドエンジニア</p>
  <p>Web開発を勉強中です。</p>
  <ul class="social-links">
    <li><a href="#">Twitter</a></li>
    <li><a href="#">GitHub</a></li>
    <li><a href="#">ブログ</a></li>
  </ul>
</div>`,
        initialCss: `body { background-color: #f0f4f8; font-family: sans-serif; }
.card {
  width: 300px; margin: 50px auto; background-color: white;
  border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px; text-align: center;
}
.card img { border-radius: 50%; }
.job-title { color: #666; font-size: 14px; }
.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px; /* アイテム間の隙間 */
}`,
        initialJs: "",
        exercise:
          "`.social-links`の`gap`を`30px`に変更して、リンク間の隙間を広げてみましょう。",
      },
    ],
  },

  {
    id: "final-project",
    chapter: "総まとめプロジェクト",
    title: "インタラクティブなカウンター作成",
    pages: [
      {
        title: "1. HTMLで骨格を作る",
        description:
          "これまでの知識を総動員して、インタラクティブなカウンターを作成します。まずはHTMLで、カウンターの数値を表示する要素と、数を増減させるためのボタンを配置しましょう。",
        initialHtml: `<div class="counter-container">
<h1>カウンター</h1>
<p id="count-display">0</p>
<div>
  <button id="decrement-button">-</button>
  <button id="increment-button">+</button>
</div>
</div>`,
        initialCss: "",
        initialJs: "",
        exercise:
          "`<h1>`タグの下に、`<p>ボタンをクリックして数を変更してください。</p>`という説明文を追加してみましょう。",
      },
      {
        title: "2. CSSで見た目を整える",
        description:
          "次に、CSSで見栄えを良くします。Flexboxを使って中央揃えにしたり、ボタンや数値のスタイルを調整したりして、使いやすいインターフェースを目指しましょう。",
        initialHtml: `<div class="counter-container">
<h1>カウンター</h1>
<p id="count-display">0</p>
<div class="button-group">
  <button id="decrement-button">-</button>
  <button id="increment-button">+</button>
</div>
</div>`,
        initialCss: `body {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
font-family: sans-serif;
background-color: #f0f9ff;
}
.counter-container {
text-align: center;
background: white;
padding: 30px;
border-radius: 10px;
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
#count-display {
font-size: 4rem;
font-weight: bold;
margin: 20px 0;
}
button {
font-size: 1.5rem;
width: 50px;
height: 50px;
margin: 0 10px;
border: none;
border-radius: 50%;
background-color: #38bdf8;
color: white;
cursor: pointer;
}`,
        initialJs: "",
        exercise:
          "ボタンにマウスが乗った時（`:hover`）に、背景色が`#0ea5e9`に変わるスタイルを追加してみましょう。",
      },
      {
        title: "3. JavaScriptで動きをつける",
        description:
          "最後にJavaScriptでカウンターのロジックを実装します。ボタンがクリックされたら数値を更新し、画面の表示に反映させます。`getElementById`、`addEventListener`、`textContent`の知識がここで活かされます。",
        initialHtml: `<div class="counter-container">
<h1>カウンター</h1>
<p id="count-display">0</p>
<div class="button-group">
  <button id="decrement-button">-</button>
  <button id="increment-button">+</button>
</div>
</div>`,
        initialCss: `body { display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; background-color: #f0f9ff; }
.counter-container { text-align: center; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
#count-display { font-size: 4rem; font-weight: bold; margin: 20px 0; }
button { font-size: 1.5rem; width: 50px; height: 50px; margin: 0 10px; border: none; border-radius: 50%; background-color: #38bdf8; color: white; cursor: pointer; }
button:hover { background-color: #0ea5e9; }`,
        initialJs: `// 必要なHTML要素を取得
const countDisplay = document.getElementById('count-display');
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');

// カウンターの現在の値を保存する変数
let count = 0;

// +ボタンがクリックされた時の処理
incrementButton.addEventListener('click', function() {
count++; // countを1増やす
countDisplay.textContent = count; // 表示を更新
});

// -ボタンがクリックされた時の処理
decrementButton.addEventListener('click', function() {
count--; // countを1減らす
countDisplay.textContent = count; // 表示を更新
});`,
        exercise:
          "マイナスボタンを押した時に、数値が0未満にならないように`if`文を使って処理を修正してみましょう。",
      },
    ],
  },
];
