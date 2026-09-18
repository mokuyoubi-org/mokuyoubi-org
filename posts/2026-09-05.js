window.currentPost = {
  title: "うるさい「λ」くんのログ",
  content: `
λ  WARN  cpu backend was already registered. Reusing existing backend factory.
こういううるさいログを消すのは、logboxとかが効かないので、metro.config.jsに書く必要がある。


const originalWarn = console.warn;
console.warn = (...args) => {
  const msg = args.map(a => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ');
  // ターミナルでうるさいキーワードをここで弾く
  if (
    msg.includes('already registered') ||
    msg.includes('already set')
  ) {
    return; // 無視する
  }
  originalWarn(...args);
};

こんな感じ。

  `,
};
