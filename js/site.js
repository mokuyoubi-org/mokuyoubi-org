// js/site.js
import { setFavicon } from "./favicon.js";
import { injectFonts, injectFontStyles } from "./fonts.js";
import { detectLang, applyLang, initLangDropdown } from "./i18n.js";

// 指定した場所にHTMLを流し込むヘルパー
const put = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

const run = async () => {
  // 係のメンバーにお仕事を発令！
  setFavicon();
  injectFonts();
  injectFontStyles();

  try {
    const [header, footer] = await Promise.all([
      fetch("./header.html").then((r) => r.text()),
      fetch("./footer.html").then((r) => r.text()),
    ]);
    put("site-header", header);
    put("site-footer", footer);
  } catch (error) {
    console.error("パーツの読み込みに失敗しちゃった…", error);
  }

  // UIイベントを設定して言語を反映
  initLangDropdown();
  applyLang(detectLang());
};

run();
