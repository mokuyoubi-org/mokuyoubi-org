window.currentPost = {
  title: "Expoのweb版をボットから守る",
  content: `
expoアプリをwebで公開したら、ボットから守ろう

特に僕のアプリのように、自動でユーザを生成するようなアプリでは必須。
バックエンドはsupabase、アプリのwebビルドとホストはcloudflare、というコンビとする。

①cloudflareの左上の検索窓でTurnstileと調べる。

setup with spinというのを選択する。
あとは、アプリを選択したら、site key と secretが表示されたと思う。あとはAIに対するプロンプト。
プロンプトはAIに貼って教えてもらってください。site keyとsecretはどこかにメモしておいてください

②supabaseに行って、authenticationから、attack protectionを選択。
Enable Captcha protectionというのがあるのでそのトグルをオンにし、
Choose Captcha Providerはturnstileを選択、Captcha secretはさっきメモしたsecretをセットして、保存する。

③Expoで、TurnstileWidgetをnative/web両方用作って、認証系、ログイン系のコードに埋め込む
詳しくはclaudeくんに聞いてください
  `,
};
