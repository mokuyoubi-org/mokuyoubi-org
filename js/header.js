// header.js

export function renderHeaderAndFooter() {
  // --- ヘッダー ---
  const headerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#2d6a4f]/10">
      <nav class="max-w-[1100px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        <!-- ロゴ。🟢MOKUYOUBIの部分。押すとindex.htmlに飛ぶ、ということ -->
        <a href="./index.html" class="flex items-center gap-2 font-display text-[1rem] font-semibold tracking-[0.15em] text-[#1a3a2a]">
          <span class="w-[28px] h-[28px] bg-[#2d6a4f] rounded-full inline-block shrink-0"></span>
          <span class="hidden sm:inline">MOKUYOUBI</span>
        </a>
        
        <!-- ナビゲーションリンク -->
        <div class="flex gap-1 sm:gap-2 text-[0.78rem] sm:text-[0.82rem] tracking-wider text-[#4a4a4a]">
          <a href="./index.html" class="px-3 sm:px-4 py-1.5 rounded-full hover:text-[#2d6a4f] hover:bg-[#f0faf2] transition-all">Home</a>
          <a href="./terms.html" class="px-3 sm:px-4 py-1.5 rounded-full hover:text-[#2d6a4f] hover:bg-[#f0faf2] transition-all">Terms</a>
          <a href="./privacy.html" class="px-3 sm:px-4 py-1.5 rounded-full hover:text-[#2d6a4f] hover:bg-[#f0faf2] transition-all">Privacy</a>
          <a href="./tokusho.html" class="px-3 sm:px-4 py-1.5 rounded-full hover:text-[#2d6a4f] hover:bg-[#f0faf2] transition-all">SCT Act</a>
          <a href="./devLog.html" class="px-3 sm:px-4 py-1.5 rounded-full hover:text-[#2d6a4f] hover:bg-[#f0faf2] transition-all">Dev Log</a>
        </div>
      </nav>
    </header>
  `;

  // --- フッター ---
  const footerHTML = `
    <footer class="bg-[#1a3a2a] text-white/70 py-10 px-8 mt-auto">
      <div class="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-xs font-serif tracking-[0.15em] text-white/90">
          <span class="w-[20px] h-[20px] bg-[#2d6a4f] rounded-full inline-block shrink-0"></span>
          <span>MOKUYOUBI</span>
        </div>
        <p class="text-[0.78rem] text-white/50">
          © 2026 Mokuyoubi. All rights reserved.
        </p>
      </div>
    </footer>
  `;

  // documentというのは現在表示されているHTML(構造)のこと。呼び出し元と考えていいが微妙に違うらしい。
  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");
  if (headerTarget) headerTarget.innerHTML = headerHTML;
  /* innerというのは、<div id="site-footer"></div>は、ご覧の通り中身が空っぽだが、この中にそのままfooterHTMLが組み込まれる。
  <div id="site-footer">
    <footer class="bg-[#1a3a2a] text-white/70 py-10 px-8 mt-auto">
      <div class="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-4">
        (省略)
      </div>
    </footer>
  </div>
ということ
  */
  if (footerTarget) footerTarget.innerHTML = footerHTML;
}
