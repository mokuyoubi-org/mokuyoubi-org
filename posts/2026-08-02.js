window.currentPost = {
  title: "SvelteからVanillaへの引っ越し",
  // ★ここに読み込ませたいゲームのJSファイルの場所を書く
  script: "./js/games/tictactoe.js",
  content: `午前3時頃に目覚めてしまったので、どうしようかと思っていたところ、Geminiと話している中で、この**Svelte製のサイトをVanillaに変換する**というアイディアが出た。

Htmlでいちいちタグで囲んでブログ書くなんて嫌だ、せめてMarkdownだ、
左様か、Markdownを使うならこういう方法がある、
などと話していたところ、ふと、ブログはMarkdownじゃなくても、JSの文字列で書けばいいのでは、と気づいたのだ。
つまり、**Markdownが使えるフレームワークも内部で行なっていることは最終的にはHtmlへの変換だ。なら、それをJSで自分でやればいい**、ということだ。

これはめちゃめちゃワクワクする発想だった---
というのは、**独自の記法を作れちゃったりする**から。
上の会話でも、なんでMarkdownって改行を改行しないわけ？などと話していたのだが、**そんなこと気にしなくていい自分にぴったりの記法**を作れるのだ。
(独自記法はNextやSvelteでも作れるやろ、というのはその通りなのだが、そもそもMarkdownを使える環境では独自記法を作る動機がないのだ。)

歴史を遡ると、このサイトは当初Next製として誕生した。ところが、小さなサイトのためにはあまりにも大袈裟なフレームワークな感じがしたのだ。
そこで移行先を検討したところ、コードがとても直感的に思えたSvelteに白羽の矢が立った。実際、Svelteに何の不満もないし、コードを見ればシンプルで整っていると感じる。
ただ結局のところAIにコードを書いてもらい、その全容を理解できているわけではなかった。かと言って、わざわざSvelteについて本腰を入れて勉強する気持ちもなかった。

結局自分が理解できるコード、少なくとも理解しようとタックルできるコードがいい。そこで独自の記法を作る、というのが自由度が高くて面白そうで、Vanillaにすることにした。
Tailwindも導入した。これは、ExpoにもNativewindというのがあるので、もし使いやすければExpoに導入するのもいいかもなと思ったのだ。

全体としては、Vanilla製となったこのホームページに非常に満足している。

### 設定
![image](images/buildconfiguration.png)
設定という設定は、上のCloudflareの画像にあるように、
Workers & Pages / mokuyoubi-org / Settings / Build configuration
を変更したくらいだ。
元々はコマンドはsvelteなんちゃら、ディレクトリはどこどこ、とか書いてあったが、この通りスッキリした。

あと行ったことは、せっかく新生したので、gitおよびgithubの履歴をそのまま消してしまった。
やり方はGeminiくんが教えてくれるでしょう。一応貼っておくと、
rm -rf .git .github .svelte-kit .wrangler
git init
git remote add origin git@github.com:mokuyoubi-org/mokuyoubi-org.git
git add .
git commit -m "reset"
git branch -M main
git push -u -f origin main
これでいいみたいだ。いつか試してみよう。

### おまけ
独自の記法どころかJS組み込みも。この自由度には感動する。
[js:tictactoe]
  `,
};
