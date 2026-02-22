<script>
  const info = [
    {
      ja: { label: '販売業者', value: 'Mokuyoubiチーム' },
      en: { label: 'Seller', value: 'Mokuyoubi Team' }
    },
    {
      ja: { label: '代表者名', value: '公開請求があった場合、遅滞なく開示します' },
      en: { label: 'Representative', value: 'Will be disclosed without delay upon request' }
    },
    {
      ja: { label: '所在地', value: '公開請求があった場合、遅滞なく開示します' },
      en: { label: 'Address', value: 'Will be disclosed without delay upon request' }
    },
    {
      ja: { label: '電話番号', value: '公開請求があった場合、遅滞なく開示します' },
      en: { label: 'Phone Number', value: 'Will be disclosed without delay upon request' }
    },
    {
      ja: { label: 'メールアドレス', value: 'contact@mokuyoubi.org' },
      en: { label: 'Email Address', value: 'contact@mokuyoubi.org' }
    },
    {
      ja: { label: '販売価格', value: '各サービス・アプリの購入ページに表示される価格をご確認ください（消費税込み）' },
      en: { label: 'Price', value: 'Please refer to the price displayed on each service/app purchase page (tax included)' }
    },
    {
      ja: { label: '販売価格以外の必要料金', value: '通信費・デバイス利用料等はお客様のご負担となります' },
      en: { label: 'Additional Fees', value: 'Communication fees and device usage costs are the responsibility of the customer' }
    },
    {
      ja: { label: '支払方法', value: 'クレジットカード（Visa・Mastercard・American Express）、App Store、Google Play' },
      en: { label: 'Payment Methods', value: 'Credit card (Visa, Mastercard, American Express), App Store, Google Play' }
    },
    {
      ja: { label: '支払時期', value: '購入手続き完了時にお支払いが確定します' },
      en: { label: 'Payment Timing', value: 'Payment is confirmed upon completion of the purchase process' }
    },
    {
      ja: { label: 'サービス提供時期', value: '決済完了後、直ちにご利用いただけます' },
      en: { label: 'Service Delivery', value: 'Available immediately after payment is completed' }
    },
    {
      ja: { label: '返品・キャンセルについて', value: 'デジタルコンテンツの性質上、購入後の返品・キャンセルはお受けできません。ただし、法令に基づく場合はこの限りではありません。App Store・Google Play経由のご購入については、各ストアのポリシーに従います。' },
      en: { label: 'Returns & Cancellations', value: 'Due to the nature of digital content, we cannot accept returns or cancellations after purchase, except as required by law. Purchases made through the App Store or Google Play are subject to each store\'s policy.' }
    },
    {
      ja: { label: 'サブスクリプションの解約', value: 'サブスクリプションは次回更新日の24時間前までにアプリ内またはストアの設定からいつでも解約できます' },
      en: { label: 'Subscription Cancellation', value: 'Subscriptions can be cancelled at any time from within the app or store settings, up to 24 hours before the next renewal date' }
    },
    {
      ja: { label: '動作環境', value: 'iOS 16以上 / Android 10以上 / モダンブラウザ（Chrome・Safari・Firefox最新版）' },
      en: { label: 'System Requirements', value: 'iOS 16 or later / Android 10 or later / Modern browsers (latest Chrome, Safari, Firefox)' }
    },
  ];
</script>

<article class="legal-page">
  <div class="legal-hero">
    <div class="container">
      <div class="legal-label">
        <span class="ja-line">特定商取引法に基づく表記</span>
        <span class="en-line">Specified Commercial Transactions Act</span>
      </div>
      <h1>
        <span class="ja-line">特定商取引法に基づく表記</span>
        <span class="en-line">Commercial Transactions</span>
      </h1>
      <p class="note">
        <span class="ja-line">特定商取引法第11条に基づき、以下の事項を表記します。</span>
        <span class="en-line">The following information is provided pursuant to Article 11 of the Specified Commercial Transactions Act of Japan.</span>
      </p>
    </div>
  </div>

  <div class="legal-content">
    <div class="container">
      <table class="info-table">
        <tbody>
          {#each info as row}
            <tr>
              <th>
                <span class="ja-line">{row.ja.label}</span>
                <span class="en-line">{row.en.label}</span>
              </th>
              <td>
                <span class="ja-line">{row.ja.value}</span>
                <span class="en-line">{row.en.value}</span>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

      <div class="contact-box">
        <p>
          <span class="ja-line">上記情報の開示請求・お問い合わせは以下までご連絡ください。</span>
          <span class="en-line">For disclosure requests or inquiries regarding the above information, please contact us below.</span>
        </p>
        <a href="mailto:support@mokuyoubi.org" class="contact-link">contact@mokuyoubi.org</a>
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
    max-width: 860px;
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
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    color: var(--green-deep);
    line-height: 1.15;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }

  .note {
    font-size: 0.88rem;
    color: var(--ink-soft);
    display: flex;
    flex-direction: column;
  }

  .legal-content {
    padding: 4rem 2rem 6rem;
  }

  .info-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 3rem;
  }

  .info-table tr {
    border-bottom: 1px solid rgba(45,106,79,0.08);
  }

  .info-table th {
    width: 220px;
    padding: 1.25rem 1.5rem 1.25rem 0;
    text-align: left;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--green-deep);
    vertical-align: top;
    white-space: nowrap;
  }

  .info-table td {
    padding: 1.25rem 0;
    font-size: 0.88rem;
    color: var(--ink-soft);
    line-height: 1.8;
  }

  .info-table th span,
  .info-table td span {
    display: block;
  }

  .contact-box {
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
    font-size: 0.88rem;
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
  .en-line { display: none; }
  :global(.en) .ja-line { display: none; }
  :global(.en) .en-line { display: block; }

  @media (max-width: 600px) {
    .info-table th {
      width: 120px;
      font-size: 0.78rem;
      white-space: normal;
    }
    .info-table td { font-size: 0.82rem; }
  }
</style>