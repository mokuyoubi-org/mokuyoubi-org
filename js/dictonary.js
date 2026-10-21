// js/dictionary.js
// 形式: グループ → 言語 → キー
// 本文中の {name} は、mainTitle.hoshigoMain（言語ごとの名前）に置き換わる

const link = (href, text) =>
  `<a href="${href}" class="text-[#2d6a4f] underline underline-offset-2">${text}</a>`;
const mail = link("mailto:support@mokuyoubi.org", "support@mokuyoubi.org");
const paddleNet = link("https://paddle.net", "paddle.net");
const paddlePrivacy = link(
  "https://www.paddle.com/legal/privacy",
  "paddle.com/legal/privacy",
);
const paddleTerms = (text) =>
  link("https://www.paddle.com/legal/checkout-buyer-terms", text);
const refundLink = (text) => link("./refunds.html", text);
const termsLink = (text) => link("./terms.html", text);

export const dictionary = {
  mainTitle: {
    en: { hoshigoMain: "StarGo", hoshigoSub: "" },
    ja: { hoshigoMain: "星碁", hoshigoSub: "Hoshigo" },
    zh: { hoshigoMain: "星围棋", hoshigoSub: "Xīng Wéiqí" },
    ko: { hoshigoMain: "별바둑", hoshigoSub: "Byeol Baduk" },
  },

  common: {
    en: {
      pricing: "Pricing",
      terms: "Terms",
      privacy: "Privacy",
      refunds: "Refunds",
      updated: "Last updated: October 2026",
    },
    ja: {
      pricing: "料金",
      terms: "利用規約",
      privacy: "プライバシー",
      refunds: "返金",
      updated: "最終更新: 2026年10月",
    },
    zh: {
      pricing: "价格",
      terms: "条款",
      privacy: "隐私",
      refunds: "退款",
      updated: "最后更新:2026年10月",
    },
    ko: {
      pricing: "요금",
      terms: "이용약관",
      privacy: "개인정보",
      refunds: "환불",
      updated: "최종 업데이트: 2026년 10월",
    },
  },

  home: {
    en: {
      tagline:
        "A cute, simple, beginner-friendly Go experience — for web and mobile",
    },
    ja: {
      tagline: "かわいくてシンプルな、初心者にやさしい囲碁アプリ",
    },
    zh: { tagline: "可爱、简单、适合新手的围棋体验" },
    ko: {
      tagline: "귀엽고 단순한, 초보자에게 친절한 바둑 앱",
    },
  },

  pricing: {
    en: {
      intro:
        "{name} is free to play. Upgrade to Premium to save unlimited game records.",
      free: "Free",
      monthly: "Premium Monthly",
      yearly: "Premium Yearly",
      perMonth: " / month",
      perYear: " / year",
      free1: "✓ Save up to 50 game records per board size",
      premium1: "✓ Unlimited game record saving",
      notes: [
        [
          "Billing",
          "Premium is a subscription. It renews automatically each month or year until you cancel. You can cancel at any time.",
        ],
        [
          "Payments and taxes",
          "Prices are shown in Japanese yen (JPY). Web purchases are processed by Paddle, our Merchant of Record, and taxes are shown at checkout. Purchases made through the App Store or Google Play are processed by each store.",
        ],
        [
          "Refunds",
          `You can request a refund within 14 days of purchase. See our ${refundLink("Refund Policy")}.`,
        ],
        [
          "Seller and contact",
          `{name} is provided by the Mokuyoubi Team. Questions? Email ${mail}.`,
        ],
      ],
    },
    ja: {
      intro:
        "{name}は無料で遊べます。Premiumにすると、棋譜を無制限に保存できます。",
      free: "無料",
      monthly: "Premium 月額",
      yearly: "Premium 年額",
      perMonth: " / 月",
      perYear: " / 年",
      free1: "✓ 棋譜を盤サイズごとに50件まで保存",
      premium1: "✓ 棋譜を無制限に保存",
      notes: [
        [
          "請求について",
          "Premiumは自動更新のサブスクリプションです。解約するまで、毎月または毎年自動で更新されます。解約はいつでもできます。",
        ],
        [
          "支払いと税金",
          "価格は日本円(JPY)で表示しています。Webでの購入は、販売代行業者(Merchant of Record)であるPaddleが処理し、税金は決済時に表示されます。App StoreやGoogle Playでの購入は、各ストアが処理します。",
        ],
        [
          "返金",
          `購入から14日以内であれば、返金を依頼できます。詳しくは${refundLink("返金ポリシー")}をご覧ください。`,
        ],
        [
          "販売者と連絡先",
          `{name}は、Mokuyoubi Team が提供しています。ご質問は${mail}までご連絡ください。`,
        ],
      ],
    },
    zh: {
      intro: "{name}可免费游玩。升级 Premium 即可无限保存棋谱。",
      free: "免费",
      monthly: "Premium 月付",
      yearly: "Premium 年付",
      perMonth: " / 月",
      perYear: " / 年",
      free1: "✓ 每种棋盘尺寸最多保存 50 份棋谱",
      premium1: "✓ 无限保存棋谱",
      notes: [
        [
          "计费",
          "Premium 为订阅服务,会按月或按年自动续订,直到您取消。您可以随时取消。",
        ],
        [
          "支付与税费",
          "价格以日元(JPY)显示。网页购买由我们的 Merchant of Record Paddle 处理,税费会在结账时显示。通过 App Store 或 Google Play 的购买由各应用商店处理。",
        ],
        [
          "退款",
          `购买后 14 天内可申请退款。详情请见${refundLink("退款政策")}。`,
        ],
        [
          "销售方与联系方式",
          `{name}由 Mokuyoubi Team 提供。如有疑问,请发送邮件至 ${mail}。`,
        ],
      ],
    },
    ko: {
      intro:
        "{name}은 무료로 즐길 수 있습니다. Premium으로 업그레이드하면 기보를 무제한으로 저장할 수 있습니다.",
      free: "무료",
      monthly: "Premium 월간",
      yearly: "Premium 연간",
      perMonth: " / 월",
      perYear: " / 년",
      free1: "✓ 바둑판 크기별로 기보 최대 50개 저장",
      premium1: "✓ 기보 무제한 저장",
      notes: [
        [
          "결제",
          "Premium은 구독 서비스이며, 해지하기 전까지 매월 또는 매년 자동으로 갱신됩니다. 언제든지 해지할 수 있습니다.",
        ],
        [
          "결제와 세금",
          "가격은 일본 엔(JPY)으로 표시됩니다. 웹 결제는 판매 대행사(Merchant of Record)인 Paddle이 처리하며, 세금은 결제 시 표시됩니다. App Store나 Google Play에서의 구매는 각 스토어가 처리합니다.",
        ],
        [
          "환불",
          `구매 후 14일 이내에 환불을 요청할 수 있습니다. 자세한 내용은 ${refundLink("환불 정책")}을 확인해 주세요.`,
        ],
        [
          "판매자 및 문의",
          `{name}은 Mokuyoubi Team 이 제공합니다. 문의는 ${mail}로 보내 주세요.`,
        ],
      ],
    },
  },

  terms: {
    en: {
      h1: "Terms of Service",
      intro:
        "These Terms govern your use of services provided by the Mokuyoubi Team. Please read them before using our services.",
      sections: [
        [
          "1. Use of Service",
          `{name} and related products (the "Service") are operated by the Mokuyoubi Team ("we" or "us"). By using the Service, you agree to these Terms. The Service is intended for users aged 13 and older.`,
        ],
        [
          "2. Accounts",
          "Some features require an account. You are responsible for keeping your information accurate and your account secure. Do not transfer or share your account with others.",
        ],
        [
          "3. Payments and Subscriptions",
          "{name} Premium is a paid subscription. Prices and plans are shown on our Pricing page and at checkout. Subscriptions renew automatically at the end of each billing period (monthly or yearly) until you cancel.",
          `Our order process for web purchases is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all of our web orders. Paddle provides all customer service inquiries and handles returns for web purchases. Payments, billing, taxes, cancellations and refunds for web purchases are governed by ${paddleTerms("Paddle's Checkout Buyer Terms")}. Purchases made through the App Store or Google Play are processed by, and subject to the terms of, each store.`,
          `You can cancel your subscription at any time. Cancelling stops future renewals. Refunds are described in our ${refundLink("Refund Policy")}.`,
        ],
        [
          "4. Prohibited Conduct",
          "You may not: use cheats or unauthorized programs; harass or defame other users; publish other people's personal information without a lawful basis; attempt unauthorized access or overload our servers; use the Service for commercial purposes without permission; or engage in other inappropriate conduct.",
        ],
        [
          "5. Intellectual Property",
          "Content in the Service (including logos, design, and text) is owned by the Mokuyoubi Team or respective rights holders. Personal, non-commercial use is permitted. Unauthorized reproduction or distribution is not allowed.",
        ],
        [
          "6. Termination",
          "We may suspend or terminate your access if you materially breach these Terms or repeatedly or seriously violate Section 4. You may stop using the Service and delete your account at any time from within the app.",
        ],
        [
          "7. Disclaimer",
          `The Service is provided "as is." We do not guarantee uninterrupted availability or completeness, and we are not liable for damages arising from service interruptions or data loss.`,
        ],
        [
          "8. Changes to Terms",
          "We may update these Terms. Significant changes will be communicated within the Service. Continued use after changes means you accept the revised Terms.",
        ],
        [
          "9. Contact",
          `Questions about these Terms? Email ${mail}, or reach out via GitHub Issues or the support page on your app store.`,
        ],
      ],
    },
    ja: {
      h1: "利用規約",
      intro:
        "本規約は、Mokuyoubi Team が提供するサービスの利用条件を定めるものです。ご利用の前にお読みください。",
      sections: [
        [
          "1. サービスの利用",
          "「{name}」および関連製品(以下「本サービス」)は、Mokuyoubi Team(以下「当チーム」)が運営しています。本サービスを利用することで、本規約に同意したものとみなします。本サービスは13歳以上の方を対象としています。",
        ],
        [
          "2. アカウント",
          "一部の機能にはアカウント登録が必要です。登録情報を正確に保ち、アカウントを安全に管理する責任は、ご自身にあります。アカウントの譲渡や共有はしないでください。",
        ],
        [
          "3. 支払いとサブスクリプション",
          "{name} Premiumは有料のサブスクリプションです。料金とプランは、料金ページおよび決済時に表示されます。解約するまで、請求期間(月または年)ごとに自動で更新されます。",
          `Web購入の注文処理は、当チームのオンライン販売代行業者であるPaddle.comが行います。Paddle.comは、すべてのWeb注文におけるMerchant of Recordです。Paddleは、Web購入に関するお問い合わせ対応と返品処理を行います。Web購入の支払い、請求、税金、解約、返金には、${paddleTerms("PaddleのCheckout Buyer Terms")}が適用されます。App StoreやGoogle Playでの購入は、各ストアが処理し、各ストアの規約が適用されます。`,
          `解約はいつでもできます。解約すると、次回以降の更新が止まります。返金については、${refundLink("返金ポリシー")}をご覧ください。`,
        ],
        [
          "4. 禁止事項",
          "次の行為を禁止します: チートや不正なプログラムの使用、他のユーザーへの嫌がらせや中傷、正当な理由のない他人の個人情報の公開、不正アクセスやサーバーへの過負荷、許可のない商用利用、その他の不適切な行為。",
        ],
        [
          "5. 知的財産",
          "本サービス内のコンテンツ(ロゴ、デザイン、文章など)は、当チームまたは各権利者に帰属します。個人的・非商用の利用は認められます。無断の複製や配布は禁止します。",
        ],
        [
          "6. 利用の停止",
          "本規約に重大に違反した場合、または第4条の禁止事項に繰り返し、もしくは重大に違反した場合、当チームは利用を停止または終了することがあります。ご自身でも、アプリ内からいつでも利用をやめ、アカウントを削除できます。",
        ],
        [
          "7. 免責",
          "本サービスは「現状有姿」で提供されます。継続的な提供や完全性は保証せず、サービスの中断やデータの消失による損害について責任を負いません。",
        ],
        [
          "8. 規約の変更",
          "当チームは本規約を変更することがあります。重要な変更は本サービス内でお知らせします。変更後も利用を続けた場合、変更後の規約に同意したものとみなします。",
        ],
        [
          "9. お問い合わせ",
          `本規約についてのご質問は、${mail}までメールいただくか、GitHub Issues、または各アプリストアのサポートページからご連絡ください。`,
        ],
      ],
    },
    zh: {
      h1: "服务条款",
      intro: "本条款适用于您使用 Mokuyoubi Team 提供的服务。使用前请仔细阅读。",
      sections: [
        [
          "1. 服务的使用",
          "“{name}”及相关产品(以下简称“本服务”)由 Mokuyoubi Team(以下简称“我们”)运营。使用本服务即表示您同意本条款。本服务面向 13 岁及以上的用户。",
        ],
        [
          "2. 账户",
          "部分功能需要注册账户。您有责任保持信息准确并确保账户安全。请勿转让账户或与他人共享账户。",
        ],
        [
          "3. 支付与订阅",
          "{name} Premium 为付费订阅服务。价格和方案显示在价格页面及结账页面。订阅会在每个计费周期(按月或按年)结束时自动续订,直到您取消。",
          `网页购买的订单流程由我们的在线经销商 Paddle.com 负责。Paddle.com 是我们所有网页订单的 Merchant of Record。Paddle 负责处理网页购买的所有客户服务咨询和退货。网页购买的支付、账单、税费、取消和退款适用${paddleTerms("Paddle 的 Checkout Buyer Terms")}。通过 App Store 或 Google Play 的购买由各应用商店处理,并适用各商店的条款。`,
          `您可以随时取消订阅,取消后将不再续订。退款说明请见${refundLink("退款政策")}。`,
        ],
        [
          "4. 禁止行为",
          "您不得:使用作弊或未经授权的程序;骚扰或诽谤其他用户;无合法依据公开他人的个人信息;尝试未经授权的访问或使服务器过载;未经许可将本服务用于商业目的;或从事其他不当行为。",
        ],
        [
          "5. 知识产权",
          "本服务内的内容(包括标志、设计和文字)归 Mokuyoubi Team 或相应权利人所有。允许个人非商业使用,禁止未经授权的复制或传播。",
        ],
        [
          "6. 终止",
          "如果您严重违反本条款,或反复、严重违反第 4 条的规定,我们可能暂停或终止您对本服务的访问。您可以随时在应用内停止使用并删除账户。",
        ],
        [
          "7. 免责声明",
          "本服务按“现状”提供。我们不保证服务不中断或内容完整,对因服务中断或数据丢失造成的损失不承担责任。",
        ],
        [
          "8. 条款变更",
          "我们可能更新本条款。重大变更将在本服务内通知。变更后继续使用即视为接受修订后的条款。",
        ],
        [
          "9. 联系我们",
          `如对本条款有疑问,请发送邮件至 ${mail},或通过 GitHub Issues 或各应用商店的支持页面联系我们。`,
        ],
      ],
    },
    ko: {
      h1: "이용약관",
      intro:
        "이 약관은 Mokuyoubi Team 이 제공하는 서비스의 이용에 적용됩니다. 이용하기 전에 읽어 주세요.",
      sections: [
        [
          "1. 서비스 이용",
          "'{name}' 및 관련 제품(이하 '서비스')은 Mokuyoubi Team(이하 '당 팀')이 운영합니다. 서비스를 이용하면 이 약관에 동의한 것으로 봅니다. 서비스는 만 13세 이상을 대상으로 합니다.",
        ],
        [
          "2. 계정",
          "일부 기능은 계정 등록이 필요합니다. 정보를 정확하게 유지하고 계정을 안전하게 관리할 책임은 이용자에게 있습니다. 계정을 양도하거나 다른 사람과 공유하지 마세요.",
        ],
        [
          "3. 결제 및 구독",
          "{name} Premium은 유료 구독 서비스입니다. 가격과 플랜은 요금 페이지와 결제 시 표시됩니다. 구독은 해지하기 전까지 결제 주기(월간 또는 연간)가 끝날 때마다 자동으로 갱신됩니다.",
          `웹 구매의 주문 처리는 온라인 리셀러인 Paddle.com이 담당합니다. Paddle.com은 모든 웹 주문의 Merchant of Record입니다. Paddle은 웹 구매에 관한 모든 고객 문의에 응대하고 반품을 처리합니다. 웹 구매의 결제, 청구, 세금, 해지 및 환불에는 ${paddleTerms("Paddle의 Checkout Buyer Terms")}가 적용됩니다. App Store나 Google Play에서의 구매는 각 스토어가 처리하며 각 스토어의 약관이 적용됩니다.`,
          `언제든지 구독을 해지할 수 있으며, 해지하면 다음 갱신부터 결제되지 않습니다. 환불은 ${refundLink("환불 정책")}에 설명되어 있습니다.`,
        ],
        [
          "4. 금지 행위",
          "다음 행위를 금지합니다: 치트 또는 허가되지 않은 프로그램 사용, 다른 이용자에 대한 괴롭힘이나 비방, 정당한 근거 없이 타인의 개인정보를 게시하는 행위, 무단 접근 시도 또는 서버 과부하, 허가 없는 상업적 이용, 그 밖의 부적절한 행위.",
        ],
        [
          "5. 지식재산권",
          "서비스 내 콘텐츠(로고, 디자인, 텍스트 등)는 Mokuyoubi Team 또는 각 권리자에게 귀속됩니다. 개인적·비상업적 이용은 허용되며, 무단 복제와 배포는 허용되지 않습니다.",
        ],
        [
          "6. 이용 종료",
          "이 약관을 중대하게 위반하거나 제4조를 반복적 또는 중대하게 위반한 경우, 서비스 이용을 정지하거나 종료할 수 있습니다. 이용자는 언제든지 앱 내에서 이용을 중단하고 계정을 삭제할 수 있습니다.",
        ],
        [
          "7. 면책",
          "서비스는 '있는 그대로' 제공됩니다. 중단 없는 제공이나 완전성을 보장하지 않으며, 서비스 중단이나 데이터 손실로 인한 손해에 대해 책임지지 않습니다.",
        ],
        [
          "8. 약관 변경",
          "이 약관은 변경될 수 있습니다. 중요한 변경은 서비스 내에서 알려 드립니다. 변경 후 계속 이용하면 변경된 약관에 동의한 것으로 봅니다.",
        ],
        [
          "9. 문의",
          `약관에 관한 문의는 ${mail}로 보내 주시거나, GitHub Issues 또는 각 앱 스토어의 지원 페이지를 이용해 주세요.`,
        ],
      ],
    },
  },

  privacy: {
    en: {
      h1: "Privacy Policy",
      intro:
        "The Mokuyoubi Team respects your privacy. This policy explains what we collect and how we use it.",
      sections: [
        [
          "1. Information We Collect",
          "We may collect: account information (email address, username); gameplay data (match history, puzzle records); subscription status (such as whether Premium is active); and access logs and device information (such as IP address and OS version). We do not receive or store your full payment card details.",
        ],
        [
          "2. How We Use Information",
          "We use this information to provide, maintain, and improve the Service; manage subscriptions and Premium access; prevent fraud; respond to inquiries; and send important service notices. We do not use your data for marketing.",
        ],
        [
          "3. Information Sharing",
          "We do not sell personal information. We do not share it with third parties, except as required by law, as described in this policy, or with service providers (such as cloud hosting) as strictly necessary for operations.",
        ],
        [
          "4. Payments and Subscription Providers",
          `Web purchases of {name} Premium are processed by Paddle.com Market Limited ("Paddle"), the Merchant of Record. Paddle collects and processes your payment and billing information (such as name, email address, billing country, and payment details) to complete your order, handle taxes, prevent fraud, and process refunds, under its own privacy notice: ${paddlePrivacy}. We receive information about your order and subscription status from Paddle.`,
          "We use RevenueCat to manage subscriptions and Premium access across web, iOS, and Android. RevenueCat receives your app user ID and purchase information. Purchases made through the App Store or Google Play are processed by Apple or Google under their own privacy policies.",
        ],
        [
          "5. Storage, Security, and Cookies",
          "Your information is stored on servers with appropriate security measures. However, no internet service can be completely secure. We use cookies to keep you logged in. You can disable cookies in your browser, though some features may not work properly.",
        ],
        [
          "6. Children's Privacy",
          "The Service is not intended for children under 13. If we learn that we have collected a child's personal information, we will promptly delete it.",
        ],
        [
          "7. Your Rights",
          `You can access, correct, or delete your account information. To request account deletion or data export, email ${mail} or contact us via GitHub Issues.`,
        ],
        [
          "8. Changes to This Policy",
          "We may update this policy. Significant changes will be communicated within the Service.",
        ],
      ],
    },
    ja: {
      h1: "プライバシーポリシー",
      intro:
        "Mokuyoubi Team は、お客様のプライバシーを尊重します。本ポリシーでは、収集する情報とその利用方法を説明します。",
      sections: [
        [
          "1. 収集する情報",
          "次の情報を収集することがあります: アカウント情報(メールアドレス、ユーザー名)、プレイデータ(対局履歴、パズルの記録)、サブスクリプションの状態(Premiumが有効かどうかなど)、アクセスログと端末情報(IPアドレス、OSのバージョンなど)。クレジットカード情報の全体を、当チームが受け取ったり保存したりすることはありません。",
        ],
        [
          "2. 情報の利用目的",
          "収集した情報は、本サービスの提供・維持・改善、サブスクリプションとPremiumの管理、不正の防止、お問い合わせへの対応、サービスに関する重要なお知らせの送信のために利用します。マーケティング目的では利用しません。",
        ],
        [
          "3. 情報の共有",
          "個人情報を販売することはありません。法律で求められる場合、本ポリシーに記載のある場合、または運営に必要な範囲でサービス提供事業者(クラウドホスティングなど)に共有する場合を除き、第三者に提供しません。",
        ],
        [
          "4. 決済・サブスクリプション事業者",
          `{name} PremiumのWeb購入は、Merchant of RecordであるPaddle.com Market Limited(以下「Paddle」)が処理します。Paddleは、注文の完了、税金の処理、不正の防止、返金のために、お客様の支払い・請求情報(氏名、メールアドレス、請求先の国、支払い情報など)を収集・処理します。取り扱いはPaddle自身のプライバシー通知に従います: ${paddlePrivacy}。当チームは、Paddleから注文とサブスクリプションの状態の情報を受け取ります。`,
          "Web、iOS、AndroidをまたいでサブスクリプションとPremiumを管理するために、RevenueCatを利用しています。RevenueCatは、アプリのユーザーIDと購入情報を受け取ります。App StoreやGoogle Playでの購入は、AppleまたはGoogleが、それぞれのプライバシーポリシーに従って処理します。",
        ],
        [
          "5. 保管、セキュリティ、Cookie",
          "お客様の情報は、適切なセキュリティ対策を施したサーバーに保管します。ただし、インターネット上で完全な安全を保証することはできません。ログイン状態を保つためにCookieを使用します。ブラウザの設定でCookieを無効にできますが、一部の機能が使えなくなることがあります。",
        ],
        [
          "6. 子どものプライバシー",
          "本サービスは13歳未満のお子様を対象としていません。13歳未満の子どもの個人情報を収集したことを知った場合は、速やかに削除します。",
        ],
        [
          "7. お客様の権利",
          `アカウント情報の閲覧、訂正、削除ができます。アカウントの削除やデータのエクスポートをご希望の場合は、${mail}にメールいただくか、GitHub Issuesからご連絡ください。`,
        ],
        [
          "8. ポリシーの変更",
          "当チームは本ポリシーを変更することがあります。重要な変更は本サービス内でお知らせします。",
        ],
      ],
    },
    zh: {
      h1: "隐私政策",
      intro:
        "Mokuyoubi Team 尊重您的隐私。本政策说明我们收集哪些信息以及如何使用。",
      sections: [
        [
          "1. 我们收集的信息",
          "我们可能收集:账户信息(电子邮箱、用户名);游戏数据(对局记录、题目记录);订阅状态(例如 Premium 是否有效);访问日志和设备信息(例如 IP 地址、操作系统版本)。我们不会接收或存储您完整的支付卡信息。",
        ],
        [
          "2. 信息的使用方式",
          "我们使用这些信息来提供、维护和改进本服务;管理订阅和 Premium 权益;防止欺诈;回复咨询;以及发送重要的服务通知。我们不会将您的数据用于营销。",
        ],
        [
          "3. 信息共享",
          "我们不会出售个人信息。除非法律要求、本政策另有说明,或因运营所必需而与服务提供商(如云托管)共享,否则我们不会向第三方披露。",
        ],
        [
          "4. 支付与订阅服务商",
          `{name} Premium 的网页购买由 Paddle.com Market Limited(以下简称“Paddle”)处理,Paddle 是 Merchant of Record。Paddle 会收集并处理您的支付和账单信息(如姓名、邮箱、账单所在国家和支付详情),用于完成订单、处理税费、防止欺诈和办理退款,并遵循其自身的隐私声明:${paddlePrivacy}。我们会从 Paddle 获取您的订单和订阅状态信息。`,
          "我们使用 RevenueCat 在网页、iOS 和 Android 之间管理订阅和 Premium 权益。RevenueCat 会接收您的应用用户 ID 和购买信息。通过 App Store 或 Google Play 的购买由 Apple 或 Google 按各自的隐私政策处理。",
        ],
        [
          "5. 存储、安全与 Cookie",
          "您的信息存储在采取了适当安全措施的服务器上,但互联网上无法保证绝对安全。我们使用 Cookie 来保持登录状态。您可以在浏览器设置中禁用 Cookie,但部分功能可能无法正常使用。",
        ],
        [
          "6. 儿童隐私",
          "本服务不面向 13 岁以下的儿童。如果我们发现收集了 13 岁以下儿童的个人信息,将立即删除。",
        ],
        [
          "7. 您的权利",
          `您有权访问、更正或删除您的账户信息。如需删除账户或导出数据,请发送邮件至 ${mail},或通过 GitHub Issues 联系我们。`,
        ],
        ["8. 政策变更", "我们可能更新本政策。重大变更将在本服务内通知。"],
      ],
    },
    ko: {
      h1: "개인정보 처리방침",
      intro:
        "Mokuyoubi Team 은 이용자의 개인정보를 존중합니다. 이 방침은 어떤 정보를 수집하고 어떻게 사용하는지 설명합니다.",
      sections: [
        [
          "1. 수집하는 정보",
          "다음 정보를 수집할 수 있습니다: 계정 정보(이메일 주소, 사용자 이름), 게임 데이터(대국 기록, 퍼즐 기록), 구독 상태(예: Premium 활성 여부), 접속 로그와 기기 정보(IP 주소, OS 버전 등). 결제 카드의 전체 정보는 수신하거나 저장하지 않습니다.",
        ],
        [
          "2. 정보의 사용 목적",
          "수집한 정보는 서비스의 제공·유지·개선, 구독 및 Premium 관리, 부정 행위 방지, 문의 응대, 중요한 서비스 공지 발송에 사용합니다. 마케팅 목적으로는 사용하지 않습니다.",
        ],
        [
          "3. 정보 공유",
          "개인정보를 판매하지 않습니다. 법률상 요구되는 경우, 이 방침에 설명된 경우, 또는 운영에 꼭 필요한 범위에서 서비스 제공업체(클라우드 호스팅 등)와 공유하는 경우를 제외하고는 제3자에게 제공하지 않습니다.",
        ],
        [
          "4. 결제 및 구독 서비스 제공업체",
          `{name} Premium의 웹 구매는 Merchant of Record인 Paddle.com Market Limited(이하 'Paddle')가 처리합니다. Paddle은 주문 완료, 세금 처리, 부정 결제 방지, 환불을 위해 결제 및 청구 정보(이름, 이메일, 청구 국가, 결제 정보 등)를 수집·처리하며, 이는 Paddle의 자체 개인정보 처리방침을 따릅니다: ${paddlePrivacy}. 당 팀은 Paddle로부터 주문 및 구독 상태 정보를 받습니다.`,
          "웹, iOS, Android 전반의 구독과 Premium 이용을 관리하기 위해 RevenueCat을 사용합니다. RevenueCat은 앱 사용자 ID와 구매 정보를 받습니다. App Store나 Google Play에서의 구매는 Apple 또는 Google이 각자의 개인정보 처리방침에 따라 처리합니다.",
        ],
        [
          "5. 저장, 보안 및 쿠키",
          "이용자의 정보는 적절한 보안 조치가 적용된 서버에 저장됩니다. 다만 인터넷상에서 절대적인 보안을 보장할 수는 없습니다. 로그인 상태를 유지하기 위해 쿠키를 사용합니다. 브라우저 설정에서 쿠키를 끌 수 있으나 일부 기능이 제대로 작동하지 않을 수 있습니다.",
        ],
        [
          "6. 아동의 개인정보",
          "서비스는 만 13세 미만 아동을 대상으로 하지 않습니다. 만 13세 미만 아동의 개인정보가 수집된 사실을 알게 되면 즉시 삭제합니다.",
        ],
        [
          "7. 이용자의 권리",
          `계정 정보를 열람, 정정, 삭제할 수 있습니다. 계정 삭제나 데이터 내보내기를 원하시면 ${mail}로 이메일을 보내 주시거나 GitHub Issues로 문의해 주세요.`,
        ],
        [
          "8. 방침 변경",
          "이 방침은 변경될 수 있습니다. 중요한 변경은 서비스 내에서 알려 드립니다.",
        ],
      ],
    },
  },

  refunds: {
    en: {
      h1: "Refund Policy",
      intro: `This policy applies to {name} Premium purchases made on the web, and is part of our ${termsLink("Terms of Service")}.`,
      sections: [
        [
          "1. Merchant of Record",
          `Paddle.com Market Limited ("Paddle") is the Merchant of Record for web purchases. Refunds are processed by Paddle, not by the Mokuyoubi Team.`,
        ],
        [
          "2. Refund period",
          "You can request a refund within 14 days of the purchase date, for any reason. This applies to monthly and yearly plans, including renewal charges.",
        ],
        [
          "3. How to request a refund",
          `Request your refund from Paddle at ${paddleNet}, using the email address you used at checkout. If you have trouble, email ${mail} and we will help.`,
        ],
        [
          "4. Processing time",
          "Once a refund is approved, it may take several business days to appear, depending on your payment method. Premium access for a refunded purchase ends.",
        ],
        [
          "5. Cancelling your subscription",
          "You can cancel at any time. Cancelling stops future renewals. To get a refund for a charge, please request it within the 14-day period above.",
        ],
        [
          "6. App Store and Google Play purchases",
          "Purchases made through the App Store or Google Play follow each store's refund policy. Please request refunds from the store.",
        ],
        [
          "7. Your statutory rights",
          "Nothing in this policy limits your rights under applicable consumer protection laws.",
        ],
      ],
    },
    ja: {
      h1: "返金ポリシー",
      intro: `このポリシーは、Webでの{name} Premiumの購入に適用され、${termsLink("利用規約")}の一部です。`,
      sections: [
        [
          "1. 販売代行業者(Merchant of Record)",
          "Paddle.com Market Limited(以下「Paddle」)が、Web購入におけるMerchant of Recordです。返金はPaddleが処理し、Mokuyoubi Teamでは処理しません。",
        ],
        [
          "2. 返金期間",
          "購入日から14日以内であれば、理由を問わず返金を依頼できます。月額・年額プランの両方が対象で、更新時の請求も含みます。",
        ],
        [
          "3. 返金の依頼方法",
          `決済時のメールアドレスを使って、${paddleNet}からPaddleに依頼してください。うまくいかない場合は、${mail}までご連絡ください。サポートいたします。`,
        ],
        [
          "4. 処理期間",
          "返金が承認されてから、お支払い方法によっては反映まで数営業日かかることがあります。返金された購入分のPremiumは利用できなくなります。",
        ],
        [
          "5. 解約",
          "解約はいつでもできます。解約すると、次回以降の更新が止まります。すでに請求された分の返金は、上記の14日以内に依頼してください。",
        ],
        [
          "6. App StoreとGoogle Playでの購入",
          "App StoreやGoogle Playでの購入には、各ストアの返金ポリシーが適用されます。返金は各ストアに依頼してください。",
        ],
        [
          "7. 法律上の権利",
          "このポリシーは、適用される消費者保護法に基づくお客様の権利を制限するものではありません。",
        ],
      ],
    },
    zh: {
      h1: "退款政策",
      intro: `本政策适用于在网页上购买 {name} Premium 的情况,是${termsLink("服务条款")}的一部分。`,
      sections: [
        [
          "1. 销售代理商(Merchant of Record)",
          "Paddle.com Market Limited(以下简称“Paddle”)是网页购买的 Merchant of Record。退款由 Paddle 处理,而非 Mokuyoubi Team。",
        ],
        [
          "2. 退款期限",
          "自购买之日起 14 天内,您可以无理由申请退款。月付和年付订阅均适用,包括续订扣款。",
        ],
        [
          "3. 如何申请退款",
          `请使用结账时的邮箱地址,通过 ${paddleNet} 向 Paddle 申请退款。如有问题,请发送邮件至 ${mail},我们会协助您。`,
        ],
        [
          "4. 处理时间",
          "退款获批后,根据您的支付方式,可能需要几个工作日才能到账。已退款购买所对应的 Premium 权益将终止。",
        ],
        [
          "5. 取消订阅",
          "您可以随时取消,取消后将不再续订。如需退还已扣款项,请在上述 14 天内申请。",
        ],
        [
          "6. 通过 App Store 和 Google Play 的购买",
          "通过 App Store 或 Google Play 的购买适用各应用商店的退款政策,请向对应的商店申请退款。",
        ],
        ["7. 法定权利", "本政策不限制您依据适用的消费者保护法所享有的权利。"],
      ],
    },
    ko: {
      h1: "환불 정책",
      intro: `이 정책은 웹에서 {name} Premium을 구매한 경우에 적용되며, ${termsLink("이용약관")}의 일부입니다.`,
      sections: [
        [
          "1. 판매 대행사(Merchant of Record)",
          "Paddle.com Market Limited(이하 'Paddle')가 웹 구매의 Merchant of Record입니다. 환불은 Mokuyoubi Team이 아닌 Paddle이 처리합니다.",
        ],
        [
          "2. 환불 기간",
          "구매일로부터 14일 이내에는 사유와 관계없이 환불을 요청할 수 있습니다. 월간·연간 구독 모두 해당되며, 갱신 결제도 포함됩니다.",
        ],
        [
          "3. 환불 요청 방법",
          `결제 시 사용한 이메일 주소로 ${paddleNet}에서 Paddle에 환불을 요청해 주세요. 문제가 있으면 ${mail}로 문의해 주세요. 도와드리겠습니다.`,
        ],
        [
          "4. 처리 기간",
          "환불이 승인된 후 결제 수단에 따라 반영되기까지 영업일 기준 며칠이 걸릴 수 있습니다. 환불된 구매분의 Premium 이용은 종료됩니다.",
        ],
        [
          "5. 구독 해지",
          "언제든지 해지할 수 있으며, 해지하면 다음 갱신부터 결제되지 않습니다. 이미 결제된 금액의 환불은 위의 14일 이내에 요청해 주세요.",
        ],
        [
          "6. App Store 및 Google Play 구매",
          "App Store나 Google Play에서의 구매에는 각 스토어의 환불 정책이 적용되며, 환불은 해당 스토어에 요청해야 합니다.",
        ],
        [
          "7. 법적 권리",
          "이 정책은 관련 소비자 보호법에 따른 이용자의 권리를 제한하지 않습니다.",
        ],
      ],
    },
  },
};
