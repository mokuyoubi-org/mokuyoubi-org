<script>
  const lastUpdated = '2026年2月';
  const lastUpdatedEn = 'February 2026';

  const sections = [
    {
      ja: { title: '1. サービスの利用について', body: `本サービス「星碁（Hoshigo）」および関連サービス（以下「本サービス」）は、Mokuyoubiチーム（以下「当チーム」）が提供するものです。本サービスをご利用いただくことで、本規約に同意したものとみなします。本サービスは13歳以上の方を対象としています。` },
      en: { title: '1. Use of Service', body: `The services provided under "Hoshigo" and related products (the "Service") are operated by the Mokuyoubi Team ("we" or "us"). By using the Service, you agree to these Terms. The Service is intended for users aged 13 and older.` }
    },
    {
      ja: { title: '2. アカウント', body: `一部のサービスにはアカウントの登録が必要です。登録情報は正確に保ち、アカウントの管理はご自身の責任で行ってください。他者へのアカウントの譲渡・共有はご遠慮ください。` },
      en: { title: '2. Accounts', body: `Some features require account registration. You are responsible for maintaining the accuracy of your information and the security of your account. Do not transfer or share your account with others.` }
    },
    {
      ja: { title: '3. 禁止事項', body: `本サービスの利用にあたり、以下の行為を禁止します：チート行為・不正プログラムの使用、他のユーザーへの嫌がらせ・誹謗中傷、本サービスへの不正アクセス・サーバーへの過負荷行為、商業目的での無断利用、その他当チームが不適切と判断する行為。` },
      en: { title: '3. Prohibited Conduct', body: `You may not: use cheats or unauthorized programs; harass or defame other users; attempt unauthorized access or overload our servers; use the Service for commercial purposes without permission; or engage in any conduct we deem inappropriate.` }
    },
    {
      ja: { title: '4. 知的財産権', body: `本サービスに含まれるコンテンツ（ロゴ、デザイン、テキスト等）の知的財産権はMokuyoubiチームまたは正当な権利者に帰属します。本サービスの個人的・非商業的な利用を許可しますが、無断での複製・配布はお断りします。` },
      en: { title: '4. Intellectual Property', body: `All content within the Service (including logos, design, and text) is owned by the Mokuyoubi Team or respective rights holders. Personal, non-commercial use is permitted. Unauthorized reproduction or distribution is not allowed.` }
    },
    {
      ja: { title: '5. 免責事項', body: `本サービスは現状有姿で提供されます。当チームはサービスの継続性・完全性を保証せず、サービス中断・データ消失によって生じた損害について責任を負いません。` },
      en: { title: '5. Disclaimer', body: `The Service is provided "as is." We do not guarantee uninterrupted availability or completeness of the Service. We are not liable for damages arising from service interruptions or data loss.` }
    },
    {
      ja: { title: '6. 規約の変更', body: `当チームは本規約を随時変更することがあります。重要な変更の際はサービス内でお知らせします。変更後に本サービスを継続してご利用いただいた場合、変更後の規約に同意したものとみなします。` },
      en: { title: '6. Changes to Terms', body: `We may update these Terms at any time. Significant changes will be communicated within the Service. Continued use after changes constitutes acceptance of the revised Terms.` }
    },
    {
      ja: { title: '7. お問い合わせ', body: `本規約に関するご質問は、GitHubのIssueまたは各ストアのサポートページからお問い合わせください。` },
      en: { title: '7. Contact', body: `For questions regarding these Terms, please reach out via GitHub Issues or the support page on the respective app store.` }
    },
  ];
</script>

<article class="legal-page">
  <div class="legal-hero">
    <div class="container">
      <div class="legal-label">
        <span class="ja-line">利用規約</span>
        <span class="en-line">Terms of Service</span>
      </div>
      <h1>
        <span class="ja-line">ご利用にあたって</span>
        <span class="en-line">Terms of Use</span>
      </h1>
      <p class="updated">
        <span class="ja-line">最終更新: {lastUpdated}</span>
        <span class="en-line">Last updated: {lastUpdatedEn}</span>
      </p>
    </div>
  </div>

  <div class="legal-content">
    <div class="container">
      <div class="intro">
        <p>
          <span class="ja-line">本規約は、Mokuyoubiチームが提供するサービスをご利用いただく上での条件を定めるものです。ご利用前に必ずお読みください。</span>
          <span class="en-line">These Terms govern your use of services provided by the Mokuyoubi Team. Please read them carefully before using our services.</span>
        </p>
      </div>

      <div class="sections">
        {#each sections as s}
          <section class="legal-section">
            <h2>
              <span class="ja-line">{s.ja.title}</span>
              <span class="en-line">{s.en.title}</span>
            </h2>
            <p>
              <span class="ja-line">{s.ja.body}</span>
              <span class="en-line">{s.en.body}</span>
            </p>
          </section>
        {/each}
      </div>
    </div>
  </div>
</article>

<style>
  .legal-hero {
    background: var(--green-faint);
    padding: 6rem 2rem 4rem;
    border-bottom: 1px solid rgba(45,106,79,0.1);
  }

  .container {
    max-width: 760px;
    margin: 0 auto;
  }

  .legal-label {
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    color: var(--green-mid);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 300;
    color: var(--green-deep);
    line-height: 1.1;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }

  .updated {
    font-size: 0.82rem;
    color: var(--ink-faint);
    display: flex;
    flex-direction: column;
  }

  .legal-content {
    padding: 5rem 2rem;
  }

  .intro {
    font-size: 1rem;
    color: var(--ink-soft);
    line-height: 1.9;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(45,106,79,0.1);
    margin-bottom: 3rem;
  }

  .intro p {
    display: flex;
    flex-direction: column;
  }

  .legal-section {
    padding: 2.5rem 0;
    border-bottom: 1px solid rgba(45,106,79,0.07);
  }

  .legal-section:last-child { border-bottom: none; }

  h2 {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--green-deep);
    margin-bottom: 0.9rem;
    display: flex;
    flex-direction: column;
  }

  .legal-section p {
    font-size: 0.92rem;
    color: var(--ink-soft);
    line-height: 2;
    display: flex;
    flex-direction: column;
  }

  /* Bilingual */
:global(.en-line) { display: none; }
:global(.en) :global(.ja-line) { display: none; }
:global(.en) :global(.en-line) { display: block; }
</style>