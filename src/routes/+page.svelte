<script>
  const features = [
    {
      icon: '⚫',
      ja: { title: 'オンライン対局', desc: '世界中のプレイヤーとリアルタイムで対局。初心者から上級者まで、適切な相手がすぐに見つかります。' },
      en: { title: 'Online Play', desc: 'Play in real-time against players worldwide. Matchmaking finds the right opponent for every skill level.' }
    },
    {
      icon: '🧩',
      ja: { title: '詰碁で学習', desc: '丁寧に作られた詰碁問題で、楽しみながら棋力アップ。初心者でもすぐに始められます。' },
      en: { title: 'Tsumego Puzzles', desc: 'Improve your skills with carefully crafted puzzles. Designed to be beginner-friendly and genuinely fun.' }
    },
    {
      icon: '👁️',
      ja: { title: '観戦機能', desc: '上手な対局をリアルタイムで観戦。棋譜を眺めるだけでも、囲碁の美しさが伝わります。' },
      en: { title: 'Watch & Learn', desc: 'Observe live games and learn from stronger players. The beauty of Go unfolds in real time.' }
    }
  ];

  let lang = 'ja';
</script>

<!-- Hero -->
<section class="hero">
  <div class="hero-bg">
    <div class="goban-grid" aria-hidden="true">
      {#each Array(19*19) as _, i}
        <div class="cell" style="--delay: {(Math.random()*2).toFixed(2)}s"></div>
      {/each}
    </div>
  </div>
  <div class="hero-content">
    <div class="badge">NEW · 星碁 / Hoshigo</div>
    <h1>
      <span class="ja-title">囲碁を、もっと<br>やさしく。</span>
      <span class="en-title">Go, made<br>gentle.</span>
    </h1>
    <p class="hero-sub">
      <span class="ja-line">かわいく、シンプルで、初心者にやさしい囲碁アプリ。</span><br>
      <span class="en-line">A cute, simple, beginner-friendly Go experience — for web and mobile.</span>
    </p>
    <div class="hero-cta">
      <a href="/apps" class="btn-primary">
        <span class="ja-line">アプリを見る</span>
        <span class="en-line">Explore the App</span>
      </a>
      <a href="https://github.com/mokuyoubi" class="btn-ghost" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
  <div class="stone-deco" aria-hidden="true">
    <div class="stone black"></div>
    <div class="stone white"></div>
    <div class="stone black sm"></div>
  </div>
</section>

<!-- Features -->
<section class="features">
  <div class="container">
    <div class="section-label">
      <span class="ja-line">機能</span> / <span class="en-line">Features</span>
    </div>
    <h2>
      <span class="ja-line">シンプルだから、<br>深く楽しめる。</span>
      <span class="en-line">Simple design,<br>deep enjoyment.</span>
    </h2>
    <div class="feature-grid">
      {#each features as f}
        <div class="feature-card">
          <div class="feature-icon">{f.icon}</div>
          <h3>
            <span class="ja-line">{f.ja.title}</span>
            <span class="en-line">{f.en.title}</span>
          </h3>
          <p>
            <span class="ja-line">{f.ja.desc}</span>
            <span class="en-line">{f.en.desc}</span>
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- About Mokuyoubi -->
<section class="about">
  <div class="container about-inner">
    <div class="about-visual">
      <div class="kanji-display">木</div>
      <div class="kanji-sub">木曜日</div>
    </div>
    <div class="about-text">
      <div class="section-label">
        <span class="ja-line">私たちについて</span> / <span class="en-line">About</span>
      </div>
      <h2>
        <span class="ja-line">Mokuyobiチーム</span>
        <span class="en-line">Mokuyoubi Team</span>
      </h2>
      <p>
        <span class="ja-line">「木曜日」という名前のとおり、肩の力を抜いて、ゆっくり楽しめるものを作りたい。そんな思いで集まったチームです。囲碁の奥深さと美しさを、より多くの人に届けることが目標です。</span>
        <span class="en-line">Named after Thursday — a day to slow down and enjoy. We're a small independent team passionate about making Go accessible, approachable, and truly enjoyable for everyone.</span>
      </p>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="cta-banner">
  <div class="container">
    <h2>
      <span class="ja-line">さあ、一手目を。</span>
      <span class="en-line">Place your first stone.</span>
    </h2>
    <a href="/apps" class="btn-white">
      <span class="ja-line">星碁を見る →</span>
      <span class="en-line">See Hoshigo →</span>
    </a>
  </div>
</section>

<style>
  /* Hero */
  .hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: var(--stone);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    opacity: 0.07;
  }

  .goban-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(19, 1fr);
    grid-template-rows: repeat(19, 1fr);
  }

  .cell {
    border-right: 1px solid var(--green-deep);
    border-bottom: 1px solid var(--green-deep);
    animation: fade-in 1s var(--delay) both;
  }

  @keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  .badge {
    display: inline-block;
    padding: 0.35rem 1rem;
    background: var(--green-pale);
    color: var(--green-deep);
    border-radius: 100px;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 300;
    line-height: 1.1;
    color: var(--green-deep);
    margin-bottom: 1.5rem;
    animation: slide-up 0.8s 0.2s both;
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateY(24px) }
    to { opacity: 1; transform: translateY(0) }
  }

  .hero-sub {
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 560px;
    line-height: 1.9;
    margin-bottom: 2.5rem;
    animation: slide-up 0.8s 0.4s both;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    animation: slide-up 0.8s 0.6s both;
  }

  .btn-primary {
    display: inline-flex;
    padding: 0.85rem 2rem;
    background: var(--green-mid);
    color: white;
    border-radius: 100px;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    transition: all 0.25s;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }

  .btn-primary:hover { background: var(--green-deep); transform: translateY(-2px); }

  .btn-ghost {
    display: inline-flex;
    padding: 0.85rem 2rem;
    border: 1.5px solid var(--green-mid);
    color: var(--green-mid);
    border-radius: 100px;
    font-size: 0.9rem;
    transition: all 0.25s;
  }

  .btn-ghost:hover { background: var(--green-faint); }

  .stone-deco {
    position: absolute;
    right: 8%;
    bottom: 12%;
    display: flex;
    gap: 1.5rem;
    align-items: flex-end;
    animation: slide-up 1s 0.5s both;
  }

  .stone {
    border-radius: 50%;
    box-shadow: 0 8px 32px rgba(0,0,0,0.15), inset 0 -4px 8px rgba(0,0,0,0.2);
  }

  .stone.black { width: 80px; height: 80px; background: radial-gradient(circle at 35% 35%, #4a4a4a, #111); }
  .stone.white { width: 90px; height: 90px; background: radial-gradient(circle at 35% 35%, #fff, #d8d8d8); }
  .stone.sm { width: 50px; height: 50px; background: radial-gradient(circle at 35% 35%, #4a4a4a, #111); }

  /* Features */
  .features {
    padding: 8rem 2rem;
    background: var(--white);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    color: var(--green-mid);
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    font-weight: 500;
  }

  .features h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 300;
    color: var(--green-deep);
    line-height: 1.2;
    margin-bottom: 4rem;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    padding: 2.5rem;
    border: 1px solid rgba(45,106,79,0.12);
    border-radius: 16px;
    transition: all 0.3s;
    background: var(--white);
  }

  .feature-card:hover {
    border-color: var(--green-light);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(45,106,79,0.1);
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: block;
  }

  .feature-card h3 {
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--green-deep);
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: column;
  }

  .feature-card p {
    font-size: 0.9rem;
    color: var(--ink-soft);
    line-height: 1.8;
    display: flex;
    flex-direction: column;
  }

  /* About */
  .about {
    padding: 8rem 2rem;
    background: var(--green-faint);
  }

  .about-inner {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 6rem;
    align-items: center;
  }

  .about-visual {
    text-align: center;
  }

  .kanji-display {
    font-family: var(--font-serif-jp);
    font-size: 8rem;
    color: var(--green-mid);
    line-height: 1;
    opacity: 0.6;
  }

  .kanji-sub {
    font-family: var(--font-serif-jp);
    font-size: 1.2rem;
    color: var(--green-mid);
    letter-spacing: 0.3em;
    margin-top: 0.5rem;
  }

  .about h2 {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--green-deep);
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .about p {
    color: var(--ink-soft);
    line-height: 2;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  /* CTA Banner */
  .cta-banner {
    background: var(--green-deep);
    padding: 8rem 2rem;
    text-align: center;
  }

  .cta-banner h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 300;
    color: white;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .btn-white {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 0.9rem 2.25rem;
    background: white;
    color: var(--green-deep);
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.25s;
  }

  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }

  /* Bilingual */
  .en-line { display: none; }

  :global(.en) .ja-line { display: none; }
  :global(.en) .en-line { display: block; }

  @media (max-width: 768px) {
    .about-inner { grid-template-columns: 1fr; gap: 3rem; }
    .stone-deco { display: none; }
  }
</style>