// js/fonts.js


const FONT_CONFIG = {
  en: { family: "M PLUS Rounded 1c", weights: ["400", "700"] },
  ja: {
    family: "M PLUS Rounded 1c", // Kiwi Maruも有力
    weights: ["400", "700"],
  },
  zh: {
    family: "Noto Sans SC",
    weights: ["400", "700"],
  },
  ko: {
    family: "Gowun Dodum",
    weights: ["400", "700"],
  },
};

// ① 読み込むフォントのURLを自動組み立て
export const injectFonts = () => {
  if (document.getElementById("dynamic-fonts")) return;

  const families = Object.values(FONT_CONFIG).map((conf) => {
    const familyParam = conf.family.replace(/ /g, "+");
    const weightParam = conf.weights.join(";");
    return `family=${familyParam}:wght@${weightParam}`;
  });

  const uniqueFamilies = [...new Set(families)].join("&");
  const href = `https://fonts.googleapis.com/css2?${uniqueFamilies}&display=swap`;

  const link = document.createElement("link");
  link.id = "dynamic-fonts";
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

// ② フォント切り替え用のスタイルを動的に挿入
export const injectFontStyles = () => {
  if (document.getElementById("dynamic-font-styles")) return;

  const fontRules = Object.entries(FONT_CONFIG)
    .map(([lang, conf]) => {
      return `html.lang-${lang} { font-family: '${conf.family}', sans-serif !important; }`;
    })
    .join("\n");

  const style = document.createElement("style");
  style.id = "dynamic-font-styles";
  style.textContent = `
    ${fontRules}
    
    html[class*="lang-"] body,
    html[class*="lang-"] button,
    html[class*="lang-"] input,
    html[class*="lang-"] select,
    html[class*="lang-"] textarea {
      font-family: inherit;
    }
  `;
  document.head.appendChild(style);
};
