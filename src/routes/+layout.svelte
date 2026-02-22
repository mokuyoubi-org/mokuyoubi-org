<script>
  import { page } from '$app/stores';
  let lang = 'ja';
  
  const nav = {
    ja: [
      { href: '/', label: 'ホーム' },
      { href: '/apps', label: 'アプリ' },
      { href: '/terms', label: '利用規約' },
      { href: '/privacy', label: 'プライバシー' },
          { href: '/tokusho', label: '特商法' },  // ← これを追加

    ],
    en: [
      { href: '/', label: 'Home' },
      { href: '/apps', label: 'Apps' },
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
          { href: '/tokusho', label: 'SCT Act' },  // ← これを追加

    ]
  };

  function toggleLang() {
    lang = lang === 'ja' ? 'en' : 'ja';
  }
</script>

<div class="site" class:en={lang === 'en'}>
  <header>
    <nav>
      <a href="/" class="logo">
        <span class="logo-mark">
          <!-- 木 -->
        </span>
        <span class="logo-text">MOKUYOUBI</span>
      </a>
      <div class="nav-links">
        {#each nav[lang] as item}
          <a href={item.href} class:active={$page.url.pathname === item.href}>{item.label}</a>
        {/each}
      </div>
      <button class="lang-toggle" on:click={toggleLang}>
        {lang === 'ja' ? 'EN' : 'JP'}
      </button>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="logo-mark small">
          <!-- 木 -->
        </span>
        <span>MOKUYOUBI</span>
      </div>
      <p class="footer-copy">
        © 2026 Mokuyoubi. All rights reserved.
      </p>
    </div>
  </footer>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400&display=swap');

  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

  :global(:root) {
    --green-deep: #1a3a2a;
    --green-mid: #2d6a4f;
    --green-light: #52b788;
    --green-pale: #d8f3dc;
    --green-faint: #f0faf2;
    --stone: #f5f0e8;
    --ink: #1a1a1a;
    --ink-soft: #4a4a4a;
    --ink-faint: #8a8a8a;
    --white: #ffffff;
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'Noto Sans JP', sans-serif;
    --font-serif-jp: 'Noto Serif JP', serif;
  }

  :global(body) {
    font-family: var(--font-body);
    color: var(--ink);
    background: var(--white);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  :global(a) { color: inherit; text-decoration: none; }

  .site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(45,106,79,0.12);
  }

  nav {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 64px;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-display);
    font-weight: 600;
    letter-spacing: 0.15em;
    font-size: 0.9rem;
    color: var(--green-deep);
  }

  .logo-mark {
    width: 32px;
    height: 32px;
    background: var(--green-mid);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-family: var(--font-serif-jp);
    flex-shrink: 0;
  }

  .logo-mark.small {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
  }

  .nav-links {
    display: flex;
    gap: 0.25rem;
    margin-left: auto;
  }

  .nav-links a {
    padding: 0.4rem 0.9rem;
    font-size: 0.82rem;
    letter-spacing: 0.05em;
    color: var(--ink-soft);
    border-radius: 100px;
    transition: all 0.2s;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--green-mid);
    background: var(--green-faint);
  }

  .lang-toggle {
    background: none;
    border: 1px solid var(--green-mid);
    color: var(--green-mid);
    padding: 0.3rem 0.75rem;
    border-radius: 100px;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    cursor: pointer;
    font-family: var(--font-body);
    transition: all 0.2s;
  }

  .lang-toggle:hover {
    background: var(--green-mid);
    color: white;
  }

  main {
    flex: 1;
    padding-top: 64px;
  }

  footer {
    background: var(--green-deep);
    color: rgba(255,255,255,0.7);
    padding: 2.5rem 2rem;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.9);
  }

  .footer-copy {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.5);
  }

  @media (max-width: 640px) {
    nav { padding: 0 1rem; gap: 1rem; }
    .logo-text { display: none; }
    .nav-links a { padding: 0.4rem 0.6rem; font-size: 0.78rem; }
  }
</style>