export function parseMyText(text) {
  if (!text) return "";

  return (
    text
      // 1. エスケープ処理（安全対策）
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")

      // 2. 見出し (## / ###)
      .replace(
        /^## (.*$)/gim,
        '<h2 class="font-display text-2xl font-normal text-[#1b4332] mt-8 mb-4 border-b border-[#2d6a4f]/15 pb-2">$1</h2>',
      )
      .replace(
        /^### (.*$)/gim,
        '<h3 class="font-sans text-lg font-semibold text-[#1b4332] mt-6 mb-2">$1</h3>',
      )

      // 3. 箇条書き (* アイテム)
      .replace(
        /^\* (.*$)/gim,
        '<li class="ml-5 list-disc text-[#4a4a4a] my-1">$1</li>',
      )

      // 4. 太字 (**文字**)
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-[#1b4332]">$1</strong>',
      )

      // ★★★ 5. 【NEW】画像タグの自動変換（ここで綺麗にサイズを揃える） ★★★
      .replace(
        /!\[(.*?)\]\((.*?)\)/g,
        '<img src="$2" alt="$1" class="w-full max-w-[600px] max-h-[350px] object-contain rounded-lg my-4 shadow-sm" loading="lazy">',
      )

      // 6. 【大本命】普通にエンターで改行する魔法
      .replace(/\n/g, "<br>")

      // 箇条書きを <ul> で囲む補正
      .replace(/(<li.*?>.*?<\/li>)/gs, '<ul class="my-4 space-y-1">$1</ul>')
  );
}
