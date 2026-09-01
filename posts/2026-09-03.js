window.currentPost = {
  title: "Expoのweb版をボットから守る",
  content: `
expoアプリをwebで公開したら、ボットから守りましょう
特に僕のアプリのように、自動でユーザを生成するようなアプリでは必須。
バックエンドはsupabase、アプリのwebビルドとホストはcloudflare、という黄金コンビとします。

①cloudflareの左上の検索窓でTurnstileと調べる。

②setup with spinというのを選択する。
あとは、アプリを選択したら、site key と secretが表示されたと思う。あとはAIに対するプロンプト。
プロンプトはAIに貼って教えてもらってください。site keyとsecretはどこかにメモしておいてください

③supabaseに行って、authenticationから、attack protectionを選択。
Enable Captcha protectionというのがあるのでそのトグルをオンにし、
Choose Captcha Providerはturnstileを選択、Captcha secretはさっきメモしたsecretをセットして、保存する。


④TurnstileWidgetをnative/web両方用作って、認証系、ログイン系のコードに埋め込む
詳しくはclaudeくんに聞いてください
  `,
};
