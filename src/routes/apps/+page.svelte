<script>
  const platforms = [
    { icon: '📱', ja: 'iOS / Android', en: 'iOS / Android' },
    { icon: '🌐', ja: 'Web ブラウザ', en: 'Web Browser' },
  ];

  const features = [
    {
      ja: { title: 'オンライン対局', desc: '全世界のプレイヤーとマッチング。棋力に合わせた対局が楽しめます。チャット機能もあり、対局後に感想を語り合えます。' },
      en: { title: 'Online Matches', desc: 'Match with players worldwide at your skill level. Chat after games and share your thoughts on each move.' }
    },
    {
      ja: { title: '詰碁コレクション', desc: '丁寧に設計された詰碁パズルで、楽しみながら上達。難易度は初級から上級まで。毎日新しい問題が追加されます。' },
      en: { title: 'Tsumego Collection', desc: 'Level up through carefully crafted puzzles. Difficulty ranges from beginner to advanced, with new puzzles added daily.' }
    },
    {
      ja: { title: 'リアルタイム観戦', desc: '上位ランカーの対局をリアルタイムで観戦。棋譜の再生や解析も可能です。' },
      en: { title: 'Live Spectating', desc: 'Watch top-ranked games in real time. Replay and analyze game records at your own pace.' }
    },
    {
      ja: { title: '初心者ガイド', desc: '囲碁のルールをわかりやすく解説するインタラクティブチュートリアル。知識ゼロからでも大丈夫。' },
      en: { title: 'Beginner Guide', desc: 'An interactive tutorial that explains Go rules clearly and gently. No prior knowledge needed.' }
    },
    {
      ja: { title: 'かわいいデザイン', desc: 'シンプルでかわいいビジュアルで、プレイするたびに楽しい気持ちになれます。テーマも選べます。' },
      en: { title: 'Cute & Minimal Design', desc: 'A simple, charming visual style that makes every session a joy. Multiple themes to choose from.' }
    },
    {
      ja: { title: 'クロスプラットフォーム', desc: 'iOS、Android、Webブラウザで完全同期。どこからでも続きが楽しめます。' },
      en: { title: 'Cross-Platform Sync', desc: 'Fully synced across iOS, Android, and web. Pick up right where you left off, on any device.' }
    },
  ];
</script>

<article class="apps-page">

  <!-- Hero -->
  <section class="app-hero">
    <div class="container">
      <div class="app-hero-text">
        <div class="badge">Mokuyoubi · 星碁</div>
        <h1>
          <span class="ja-line">星碁<br><em>Hoshigo</em></span>
          <span class="en-line">Hoshigo<br><em>星碁</em></span>
        </h1>
        <p class="tagline">
          <span class="ja-line">cute · simple · beginner-friendly な囲碁アプリ</span>
          <span class="en-line">A cute, simple, beginner-friendly Go app</span>
        </p>
        <div class="platforms">
          {#each platforms as p}
            <span class="platform-chip">{p.icon} <span class="ja-line">{p.ja}</span><span class="en-line">{p.en}</span></span>
          {/each}
        </div>
        <p class="availability">
          <span class="ja-line">🚀 近日公開予定</span>
          <span class="en-line">🚀 Coming Soon</span>
        </p>
      </div>
      <div class="app-hero-visual">
        <div class="goban-preview">
          <div class="board">
            {#each Array(81) as _, i}
              <div class="sq"
                class:black={[10,14,18,29,33,40,42,50].includes(i)}
                class:white={[12,22,24,36,44,48,60,66].includes(i)}>
              </div>
            {/each}
          </div>
          <div class="board-label">
            <span class="ja-line">星碁 プレビュー</span>
            <span class="en-line">Hoshigo Preview</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="features-section">
    <div class="container">
      <div class="section-label">
        <span class="ja-line">機能一覧</span> / <span class="en-line">Features</span>
      </div>
      <h2>
        <span class="ja-line">あなたの囲碁ライフを<br>豊かにする機能</span>
        <span class="en-line">Everything you need<br>to love Go</span>
      </h2>
      <div class="features-grid">
        {#each features as f}
          <div class="feat-card">
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

  <!-- Philosophy -->
  <section class="philosophy">
    <div class="container">
      <blockquote>
        <span class="ja-line">初心者向けの可愛くてシンプルな囲碁アプリを。</span>
        <span class="en-line">Go isn't hard.<br>The door was just too narrow.</span>
      </blockquote>
      <p class="philosophy-body">
        <span class="ja-line">星碁は、囲碁の本来の楽しさ——思考の深さ、美しい布石、静かな緊張感——をできるだけ多くの人に届けるために生まれました。難しいルールの説明より、まず一局。そんなアプリを目指しています。</span>
        <span class="en-line">Hoshigo was born from a simple desire: to share Go's true joy — the depth of thought, the beauty of positioning, the quiet tension — with as many people as possible. Less explaining, more playing.</span>
      </p>
    </div>
  </section>

  <!-- Notify CTA -->
  <section class="notify">
    <div class="container">
      <h2>
        <span class="ja-line">リリース通知を受け取る</span>
        <span class="en-line">Get notified at launch</span>
      </h2>
      <p>
        <span class="ja-line">GitHubで星をつけておくと、リリース時に通知が届きます。</span>
        <span class="en-line">Star us on GitHub to get notified when we launch.</span>
      </p>
      <a href="https://github.com/mokuyoubi-org" class="btn-outline" target="_blank" rel="noopener">
        ⭐ GitHub
      </a>
    </div>
  </section>

</article>

<style>
  .apps-page { background: var(--white); }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* App Hero */
  .app-hero {
    padding: 7rem 2rem 6rem;
    background: linear-gradient(135deg, var(--stone) 0%, var(--green-faint) 100%);
    overflow: hidden;
  }

  .app-hero .container {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 5rem;
    align-items: center;
    padding: 0 2rem;
  }

  .badge {
    display: inline-block;
    padding: 0.35rem 1rem;
    background: var(--green-pale);
    color: var(--green-deep);
    border-radius: 100px;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 300;
    color: var(--green-deep);
    line-height: 1.1;
    margin-bottom: 1.25rem;
  }

  h1 em {
    font-style: italic;
    color: var(--green-mid);
    opacity: 0.7;
  }

  .tagline {
    font-size: 1.05rem;
    color: var(--ink-soft);
    margin-bottom: 1.5rem;
  }

  .platforms {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
  }

  .platform-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1rem;
    background: white;
    border: 1px solid rgba(45,106,79,0.15);
    border-radius: 100px;
    font-size: 0.82rem;
    color: var(--ink-soft);
  }

  .availability {
    font-size: 0.85rem;
    color: var(--green-mid);
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  /* Goban Preview */
  .goban-preview {
    background: #dcb97a;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 24px 64px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3);
  }

  .board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 2px;
    aspect-ratio: 1;
    background: rgba(0,0,0,0.08);
    padding: 2px;
    border-radius: 4px;
  }

  .sq {
    background: #dcb97a;
    border-radius: 1px;
    position: relative;
    aspect-ratio: 1;
  }

  .sq::before, .sq::after {
    content: '';
    position: absolute;
    background: rgba(0,0,0,0.25);
  }

  .sq::before { left: 50%; top: 0; bottom: 0; width: 1px; transform: translateX(-50%); }
  .sq::after { top: 50%; left: 0; right: 0; height: 1px; transform: translateY(-50%); }

  .sq.black::before, .sq.white::before,
  .sq.black::after, .sq.white::after { display: none; }

  .sq.black::before {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #555, #111);
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
    display: block;
    width: auto; height: auto;
    transform: none;
    top: 2px; left: 2px;
  }

  .sq.white::before {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fff, #ccc);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    display: block;
    width: auto; height: auto;
    transform: none;
    top: 2px; left: 2px;
  }

  .board-label {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.75rem;
    color: rgba(0,0,0,0.45);
    letter-spacing: 0.1em;
  }

  /* Features */
  .features-section {
    padding: 8rem 2rem;
  }

  .section-label {
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    color: var(--green-mid);
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: var(--green-deep);
    line-height: 1.2;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .feat-card {
    padding: 2rem;
    border: 1px solid rgba(45,106,79,0.1);
    border-radius: 12px;
    transition: all 0.3s;
  }

  .feat-card:hover {
    border-color: var(--green-light);
    box-shadow: 0 8px 32px rgba(45,106,79,0.08);
    transform: translateY(-3px);
  }

  .feat-card h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--green-deep);
    margin-bottom: 0.6rem;
    display: flex;
    flex-direction: column;
  }

  .feat-card p {
    font-size: 0.875rem;
    color: var(--ink-soft);
    line-height: 1.8;
    display: flex;
    flex-direction: column;
  }

  /* Philosophy */
  .philosophy {
    background: var(--green-deep);
    padding: 8rem 2rem;
    text-align: center;
  }

  blockquote {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 300;
    color: white;
    line-height: 1.4;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .philosophy-body {
    max-width: 600px;
    margin: 0 auto;
    color: rgba(255,255,255,0.65);
    line-height: 2;
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Notify */
  .notify {
    padding: 7rem 2rem;
    text-align: center;
    background: var(--green-faint);
  }

  .notify h2 {
    margin-bottom: 1rem;
    align-items: center;
  }

  .notify p {
    color: var(--ink-soft);
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-outline {
    display: inline-block;
    padding: 0.85rem 2rem;
    border: 1.5px solid var(--green-mid);
    color: var(--green-mid);
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.25s;
  }

  .btn-outline:hover { background: var(--green-mid); color: white; }

  /* Bilingual */
  .en-line { display: none; }
  :global(.en) .ja-line { display: none; }
  :global(.en) .en-line { display: block; }

  @media (max-width: 800px) {
    .app-hero .container { grid-template-columns: 1fr; }
    .goban-preview { max-width: 320px; margin: 0 auto; }
  }
</style>