window.currentPost = {
  title: "Github actionにシークレットはほぼ要らない",
  content: `
どういうわけだか、自分はなんでもenvにするのがかっけえぜ！！と思って何でもかんでもenvにしている時期があった。
そのせいでめっちゃenvの数が膨らんでいたのだが、

「envに書くかどうかは、devとprodでその中身が変わるかどうか」

この基準に照らし合わせたら、本当に必要なenvはsupabaseのurlと鍵、そしてturnstileのsitekey、の計3つのみだった。
そして、githubのワークフロウに関して言えば、
      - name: Pull EAS environment variables
        run: npx eas-cli env:pull production --non-interactive
こんなふうに書くことで、easに書いてあるenvを使えるようになるので、そもそもgithubにはenv書かなくていいことになる。

（なお、easとやりとりするための
EXPO_UPDATE_TOKEN
だけは必要になるが、これは今回とは関係のない話だ。）

結局、web buildに使うcloudflareも、native buildに使うeasも、envは三つだけ。githubは1つだけになった。

そういうわけで、envは隠すための仕組みじゃない。単に名前の通り環境によって変わる変数を書くための場所に過ぎない。
いやー、スッキリした。
  `,
};
