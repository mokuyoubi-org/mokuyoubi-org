<script>
  const lastUpdated = '2026年2月';
  const lastUpdatedEn = 'February 2026';

  const sections = [
    {
      ja: { title: '1. 収集する情報', body: `本サービスでは、以下の情報を収集することがあります：アカウント登録時に提供されるメールアドレスやユーザー名などの情報、対局データや詰碁の解答履歴などのゲームプレイ情報、サービス改善のためのアクセスログ・デバイス情報（IPアドレス、OSバージョン等）。` },
      en: { title: '1. Information We Collect', body: `We may collect the following: account information such as email address and username provided during registration; gameplay data including match history and puzzle records; access logs and device information (such as IP address and OS version) for service improvement.` }
    },
    {
      ja: { title: '2. 情報の利用目的', body: `収集した情報は、サービスの提供・維持・改善、不正行為の検出と防止、お問い合わせへの対応、サービスに関する重要なお知らせの送信のために利用します。マーケティング目的での利用はありません。` },
      en: { title: '2. How We Use Information', body: `Collected information is used to: provide, maintain, and improve the Service; detect and prevent fraud; respond to inquiries; and send important service-related notices. We do not use your data for marketing purposes.` }
    },
    {
      ja: { title: '3. 情報の共有', body: `当チームは、法律上の義務がある場合を除き、ユーザーの個人情報を第三者に販売・提供・共有しません。サービス運営に必要な業務委託先（クラウドホスティング等）とは、必要最低限の範囲で情報を共有することがあります。` },
      en: { title: '3. Information Sharing', body: `We do not sell, share, or disclose personal information to third parties, except as required by law. We may share limited information with service providers (such as cloud hosting) strictly as necessary for operations.` }
    },
    {
      ja: { title: '4. データの保管と安全性', body: `ユーザー情報は、適切なセキュリティ対策を施したサーバーで保管されます。ただし、インターネット上の完全なセキュリティを保証することはできません。パスワードは適切に管理し、不審なアクセスに気づいた際はすぐにご連絡ください。` },
      en: { title: '4. Data Storage & Security', body: `User information is stored on servers with appropriate security measures. However, we cannot guarantee absolute security over the internet. Please manage your password carefully and notify us immediately of any suspicious activity.` }
    },
    {
      ja: { title: '5. Cookieの使用', body: `本サービスでは、ログイン状態の維持やサービス品質向上のためにCookieを使用することがあります。ブラウザの設定でCookieを無効にすることができますが、一部機能が正常に動作しない場合があります。` },
      en: { title: '5. Use of Cookies', body: `We may use cookies to maintain login sessions and improve service quality. You can disable cookies in your browser settings, though some features may not function properly without them.` }
    },
    {
      ja: { title: '6. お子様のプライバシー', body: `本サービスは13歳未満の方を対象としていません。13歳未満の方の個人情報が収集されていることが判明した場合、速やかに削除します。` },
      en: { title: '6. Children\'s Privacy', body: `The Service is not intended for children under 13. If we become aware that personal information of a child under 13 has been collected, we will promptly delete it.` }
    },
    {
      ja: { title: '7. ユーザーの権利', body: `ユーザーは自身のアカウント情報の確認・修正・削除をリクエストする権利があります。アカウントの削除やデータのエクスポートについてはGitHubのIssueよりお問い合わせください。` },
      en: { title: '7. Your Rights', body: `You have the right to access, correct, or delete your account information. For account deletion or data export requests, please contact us via GitHub Issues.` }
    },
    {
      ja: { title: '8. プライバシーポリシーの変更', body: `本ポリシーは随時更新されることがあります。重要な変更がある場合はサービス内でお知らせします。` },
      en: { title: '8. Changes to This Policy', body: `This policy may be updated at any time. Significant changes will be communicated within the Service.` }
    },
  ];
</script>

<article class="legal-page">
  <div class="legal-hero">
    <div class="container">
      <div class="legal-label">
        <span class="ja-line">プライバシーポリシー</span>
        <span class="en-line">Privacy Policy</span>
      </div>
      <h1>
        <span class="ja-line">個人情報の取り扱いについて</span>
        <span class="en-line">How We Handle Your Data</span>
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
          <span class="ja-line">Mokuyoubiチームはユーザーのプライバシーを尊重します。本ポリシーは、当チームがどのような情報を収集し、どのように利用するかを説明するものです。</span>
          <span class="en-line">The Mokuyoubi Team respects your privacy. This policy explains what information we collect and how we use it.</span>
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

      <div class="contact-box">
        <p>
          <span class="ja-line">プライバシーに関するご質問・ご要望は、GitHubのIssueよりお知らせください。</span>
          <span class="en-line">For privacy-related questions or requests, please reach out via GitHub Issues.</span>
        </p>
        <a href="https://github.com/mokuyoubi-org" target="_blank" rel="noopener" class="contact-link">GitHub →</a>
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
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 300;
    color: var(--green-deep);
    line-height: 1.15;
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

  .contact-box {
    margin-top: 4rem;
    padding: 2rem;
    background: var(--green-faint);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .contact-box p {
    font-size: 0.9rem;
    color: var(--ink-soft);
    display: flex;
    flex-direction: column;
  }

  .contact-link {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background: var(--green-mid);
    color: white;
    border-radius: 100px;
    font-size: 0.85rem;
    white-space: nowrap;
    transition: background 0.2s;
  }

  .contact-link:hover { background: var(--green-deep); }

  /* Bilingual */
:global(.en-line) { display: none; }
:global(.en) :global(.ja-line) { display: none; }
:global(.en) :global(.en-line) { display: block; }
</style>