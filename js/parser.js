export function parseMyText(text) {
  if (!text) return "";

  return (
    text
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
        '<div id="game-container" class="my-8 p-6 bg-[#f4f7f5] rounded-xl text-center border border-[#2d6a4f]/20"></div><script type="module" src="./js/games/$1.js"></script>'
      )

      // 5. 画像タグの自動変換
      .replace(
        /!\[(.*?)\]\((.*?)\)/g,
        '<img src="$2" alt="$1" class="w-full max-w-[600px] max-h-[350px] object-contain rounded-lg my-4 shadow-sm" loading="lazy">',
      )

      // 6. 改行を <br> に変換
      .replace(/\n/g, "<br>")

      // 箇条書きを <ul> で囲む補正
      .replace(/(<li.*?>.*?<\/li>)/gs, '<ul class="my-4 space-y-1">$1</ul>')
  );
}