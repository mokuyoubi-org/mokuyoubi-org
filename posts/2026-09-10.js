window.currentPost = {
  title: "ネイティブアプリへのturnstileの導入",
  content: `
webではうまくいってるのにネイティブアプリが開けない問題。

詳しくは
expo/packages/turnstile-widget/src/TurnstileWidget.native.tsx
および
expo/public/turnstile-bridge.html
を参照。

claudeは神。

何が起きていたか：
まず、supabaseは、auth系の時にturnstileの「この人ちゃんと人間やで！」という保証を受け取るかどうかをトグルによって変えることができる。
supabase▶︎authentication▶︎attack protection

![image](images/attackProtection.png)

このトグルをオンにすると、authenticationでログインとかotpとかの機能を使うたびに、turnstileくんの証明が必要になる。
僕のアプリではwebさえ防げればよかった(アプリを開くと自動でユーザが生成される仕組みのため、サイトにボットに入られてアカウントが自動で作られまくるのは困る事だったのだ)のだが、
supabaseくんがモバイルアプリからの通信かwebからの問い合わせかを見分けられない以上、モバイルには不要でもつける必要がある。
ここで、「ほんなら、モバイルからは適当な値をsupabaseくんに送ればいいやんけ」と思うのだが、そうするわけにはいかない。
なぜなら、turnstileくんの「この人は人間やで！」という保証が本当にturnstileくんが言ったことなのかをsupabaseは確認しているからだ。
つまり、

アプリ側「ねね、supabaseくん。turnstileくんの保証もあるし、auth手続き、お願いしますわ」
↓
supabase「ほんまか、ほんならちょっと待っててや」
supabase、cloudflareに確認しにいく。「ねね、これさ、保証さ、本当に君のもの？」
turnstile「うん、間違いないで」

ところが！適当な保証をつけとくと、ここでアウトになるというわけである。
turnstile「いや、知らんなあ」

なお、100%通るsitekeyとシークレットの組み合わせ、もあるのだが、それだと今度はwebの守りがそもそもなくなるので、意味がない。

そういうわけで、ネイティブに、不要なのに、turnstileの保証をちゃんと取ってこらせる仕組みが必要だったのだ。
そして、それが上の二つのファイルで実現されている。
claude is god.
  `,
};
