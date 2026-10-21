// js/i18n.js
import { dictionary } from "./dictonary.js";

const LANGS = ["en", "ja", "zh", "ko"];

const langNames = {
  en: "English",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
};

// 保存された言語 → ブラウザの言語 → 英語
export const detectLang = () => {
  const saved = localStorage.getItem("lang");
  if (LANGS.includes(saved)) return saved;
  const browser = navigator.language.slice(0, 2);
  return LANGS.includes(browser) ? browser : "en";
};

// 規約などのセクション配列 → HTML
const sections = (list) =>
  list
    .map(
      ([title, ...paragraphs]) => `
    <section class="py-8 border-b border-[#2d6a4f]/[0.07] last:border-0 space-y-3">
      <h2 class="text-[1.05rem] font-semibold text-[#1b4332]">${title}</h2>
      ${paragraphs.map((p) => `<p class="text-[0.92rem] text-[#555] leading-[1.9]">${p}</p>`).join("")}
    </section>`,
    )
    .join("");

// 言語UI（ボタンの文字など）を更新するヘルパー
const updateLangUI = (lang) => {
  const langCurrent = document.getElementById("lang-current");
  if (langCurrent) {
    langCurrent.textContent = langNames[lang] || lang;
  }
};

// 言語を適用する
export const applyLang = (lang) => {
  const name = dictionary.mainTitle[lang].hoshigoMain;
  document.documentElement.lang = lang;

  LANGS.forEach((l) => {
    document.documentElement.classList.remove(`lang-${l}`);
  });
  document.documentElement.classList.add(`lang-${lang}`);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const [group, key] = el.dataset.i18n.split(".");
    const value = dictionary[group]?.[lang]?.[key] ?? key;
    const html = Array.isArray(value) ? sections(value) : value;
    el.innerHTML = html.replaceAll("{name}", name);
  });

  // タイトルをシンプルに「MOKUYOUBI」で固定するにゃ！
  document.title = "MOKUYOUBI";

  updateLangUI(lang);
};

// 言語ドロップダウンのイベントを設定する
export const initLangDropdown = () => {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
  const langArrow = document.getElementById("lang-arrow");

  if (!langBtn || !langMenu) return;

  const openMenu = () => {
    langMenu.classList.remove("hidden");
    langArrow?.classList.add("rotate-180");
    langBtn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    langMenu.classList.add("hidden");
    langArrow?.classList.remove("rotate-180");
    langBtn.setAttribute("aria-expanded", "false");
  };

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !langMenu.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("click", () => {
    closeMenu();
  });

  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => {
      const selectedLang = option.getAttribute("data-value");
      if (selectedLang && LANGS.includes(selectedLang)) {
        localStorage.setItem("lang", selectedLang);
        applyLang(selectedLang);
      }
      closeMenu();
    });
  });
};
