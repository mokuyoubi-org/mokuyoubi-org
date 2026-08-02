window.currentPost = {
  title: "SvelteからVanillaへの引っ越し",
  // ★ここに読み込ませたいゲームのJSファイルの場所を書く
  script: "./js/games/tictactoe.js",
  content: `午前3時頃に目覚めてしまったので、どうしようかと思っていたところ、Geminiと話している中で、この**Svelte製のサイトをVanillaに変換する**というアイディアが出た。

  そもそも何故引越しなど考えたか？
  このサイトは当初**Next**製として誕生した。ところが、小さなサイトのためにはあまりにも大袈裟なフレームワークだという感じがしたのだ。
そこで移行先を検討したところ、コードがとても直感的に思えた**Svelte**に白羽の矢が立った。
実際にSvelteはコードや構造がシンプルに整っており、満足していたが、ここ最近、Expoアプリを大幅にシンプル化したのに伴い、ホームページも削りたいと思うようになっていた。
なぜシンプル化したいかと言えば、UI的にスッキリした見た目になる、という点もそうだが、何より**コード全体が理解しやすくなる**からだ。結局、**自分が理解できるコード、少なくとも理解しようとタックルできるコード**がいいと思ったのだ。

ではそのコードとは何か？普段Expo開発をしている自分にとっては、Nextでないならば**Vanilla**くらいしかないわけだが、それはMarkdownが使えない、つまりHtmlでブログを書くことだと僕は思い込んでいた。
そんな中、上記の会話の中でふと、ブログは**JSの文字列でも書ける**のでは、と気づいたのだ。
**Markdownが使えるフレームワークも、内部で行なっていることは結局はMarkdownのHtmlへの変換**だ。なら、**それをJSで自分でやればいい**。

これはめちゃめちゃワクワクする発想だった！
というのは、**独自の記法を作ることができる**からだ。
上でも、なんでMarkdownって改行で改行しないわけ？などと話していたのだが、**そんなことを気にしなくていい、自分にとって使いやすい記法**を作れるのだ。
(もちろん独自記法はNextやSvelteでも作れるが、そもそもMarkdownを使える環境では独自記法を作る動機がないということだ。)

こう言った経緯で、Vanillaに引っ越すことにした。
**Tailwind**も導入した。これは、Expoにも**Nativewind**というものがあるので、もし使いやすければExpoに導入するのもいいかもなと思ったのだ。

全体としては、Vanilla製となったこのホームページに非常に満足している。

### 設定
![image](images/buildconfiguration.png)
設定は、上のCloudflareの画像にあるように、
Workers & Pages / mokuyoubi-org / Settings / Build configuration
を変更したくらいだ。
元々は「コマンドはsvelteなんちゃら、ディレクトリはどこどこ」とか書いてあったが、この通りスッキリした。

ついでに、せっかく新生したので、gitおよびgithubの履歴を消した。
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
独自の記法どころかJS組み込みもできる。この自由度には感動する。
[js:tictactoe]
  `,
};
