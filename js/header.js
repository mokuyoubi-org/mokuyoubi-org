// header.js

// 🟢 ファビコン（緑色の丸）を生成・追加する関数だにゃ！
function setGlobalFavicon() {
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%232d6a4f'/></svg>";
}

export async function renderHeaderAndFooter() {
  // ファビコンをセット！
  setGlobalFavicon();

  try {
    // 外部のHTMLファイルを2つ同時に取ってくるにゃ！
    const [headerResponse, footerResponse] = await Promise.all([
      fetch('./header.html'),
      fetch('./footer.html')
    ]);

    // 中身のテキストを抽出するにゃ！
    const headerHTML = await headerResponse.text();
    const footerHTML = await footerResponse.text();

    // 画面のターゲットに流し込むにゃ！
    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    if (headerTarget) headerTarget.innerHTML = headerHTML;
    if (footerTarget) footerTarget.innerHTML = footerHTML;

  } catch (error) {
    console.error("パーツの読み込みに失敗しちゃったにゃ…", error);
  }
}