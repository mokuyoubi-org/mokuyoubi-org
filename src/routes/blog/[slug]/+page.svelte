<script>
  export let data;
</script>

<article class="post-page">
  <div class="post-hero">
    <div class="container">
      <span class="post-date">{data.meta.date}</span>
      <h1>
        <span class="ja-line">{data.meta.title}</span>
        <span class="en-line">{data.meta.titleEn}</span>
      </h1>
    </div>
  </div>
  <div class="post-body container">
    <svelte:component this={data.content} />
    <a href="/blog" class="back">← 一覧に戻る / Back</a>
  </div>
</article>

<style>
  .post-page { padding-bottom: 6rem; }
  .post-hero {
    background: var(--green-faint);
    padding: 6rem 2rem 3rem;
    margin-bottom: 3rem;
  }
  .container { max-width: 760px; margin: 0 auto; }
  .post-date {
    font-size: 0.78rem;
    color: var(--green-mid);
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 1rem;
  }
  h1 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    color: var(--green-deep);
    display: flex;
    flex-direction: column;
  }
  .post-body { padding: 0 2rem; }
  :global(.post-body h2) { font-size: 1.3rem; color: var(--green-deep); margin: 2rem 0 0.75rem; }
  :global(.post-body p) { color: var(--ink-soft); line-height: 1.9; margin-bottom: 1rem; }
  :global(.post-body strong) { color: var(--ink); }
  .back {
    display: inline-block;
    margin-top: 3rem;
    color: var(--green-mid);
    font-size: 0.88rem;
  }
  .back:hover { text-decoration: underline; }

  :global(.post-body img) {
  max-width: 100%;
  width: 600px;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

  /* Bilingual */
  :global(.en-line) { display: none; }
  :global(.en) :global(.ja-line) { display: none; }
  :global(.en) :global(.en-line) { display: block; }
</style>