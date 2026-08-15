// parser.js

export function parseMyText(text) {
  if (!text) return "";

  return (
    text
      // 一番最初と一番最後の空白・改行を削る
      .trim()
      // 1. 見出し (## / ###)
      .replace(
        /^## (.*$)/gim,
        '<h2 class="font-display text-2xl font-normal text-[#1b4332] mt-8 mb-4 border-b border-[#2d6a4f]/15 pb-2">$1</h2>',
      )
      .replace(
        /^### (.*$)/gim,
        '<h3 class="font-sans text-lg font-semibold text-[#1b4332] mt-6 mb-2">$1</h3>',
      )

      // 2. 箇条書き (* アイテム)
      .replace(
        /^\* (.*$)/gim,
        '<li class="ml-5 list-disc text-[#4a4a4a] my-1">$1</li>',
      )

      // 3. 太字 (**文字**)
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-[#1b4332]">$1</strong>',
      )

      // ★★★ 4. 【魔法の記述】[js:ファイル名] を 自動でdivとscriptタグに変換！ ★★★
      .replace(
        /\[js:(.*?)\]/g,
        '<div id="game-container" class="my-8 p-6 bg-[#f4f7f5] rounded-xl text-center border border-[#2d6a4f]/20"></div><script type="module" src="./js/games/$1.js"></script>',
      )

      // 5. 画像タグの自動変換 (例: ![説明](画像のURL))
      // 💡画像URLが後のURL自動変換で崩れないように、画像変換を先にやっておくのがコツだにゃ！
      .replace(
        /!\[(.*?)\]\((.*?)\)/g,
        '<img src="$2" alt="$1" class="w-auto h-auto max-w-[600px] max-h-[600px] rounded-xl my-4 shadow-sm" loading="lazy">',
      )

      // ★★★ 7. マークダウン風リンク [文字](URL) と 通常の URL の自動リンク化 ★★★
      // ① [タイトル](URL) の形式をリンクにする
      .replace(
        /\[(.*?)\]\((https?:\/\/[^\s<]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#2d6a4f] underline hover:opacity-80">$1</a>',
      )
      // ② 「http://〜」や「https://〜」で始まる直接書かれた文字をそのままクリックできるリンクにする
      // (※すでにaタグのhrefの中に入っているURLは書き換えない工夫をしてるにゃ！)
      .replace(
        /(?<!href="|src=")(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-[#2d6a4f] underline hover:opacity-80">$1</a>',
      )

      // 6. 改行を <br> に変換
      .replace(/\n/g, "<br>")

      // 箇条書きを <ul> で囲む補正
      .replace(/(<li.*?>.*?<\/li>)/gs, '<ul class="my-4 space-y-1">$1</ul>')
  );
}
