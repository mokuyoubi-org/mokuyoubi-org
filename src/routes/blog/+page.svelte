<script>
  export let data;
</script>

<section class="blog-page">
  <div class="container">
    <div class="section-label">
      <span class="ja-line">開発日誌</span> / <span class="en-line">Dev Log</span>
    </div>
    <h1>
      <span class="ja-line">開発の記録</span>
      <span class="en-line">Development Log</span>
    </h1>

    <div class="post-list">
      {#each data.posts as post}
        <a href="/blog/{post.slug}" class="post-card">
          <span class="post-date">{post.date}</span>
          <h2>
            <span class="ja-line">{post.title}</span>
            <span class="en-line">{post.titleEn}</span>
          </h2>
          <p>
            <span class="ja-line">{post.summary}</span>
            <span class="en-line">{post.summaryEn}</span>
          </p>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .blog-page { padding: 7rem 2rem; }
  .container { max-width: 760px; margin: 0 auto; }
  .section-label {
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    color: var(--green-mid);
    margin-bottom: 1rem;
  }
  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 300;
    color: var(--green-deep);
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
  }
  .post-list { display: flex; flex-direction: column; gap: 1.5rem; }
  .post-card {
    display: block;
    padding: 2rem;
    border: 1px solid rgba(45,106,79,0.12);
    border-radius: 12px;
    transition: all 0.2s;
  }
  .post-card:hover {
    border-color: var(--green-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(45,106,79,0.08);
  }
  .post-date {
    font-size: 0.78rem;
    color: var(--green-mid);
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--green-deep);
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 0.88rem;
    color: var(--ink-soft);
    display: flex;
    flex-direction: column;
  }

  /* Bilingual */
  :global(.en-line) { display: none; }
  :global(.en) :global(.ja-line) { display: none; }
  :global(.en) :global(.en-line) { display: block; }
</style>