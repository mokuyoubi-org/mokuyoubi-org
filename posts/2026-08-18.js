window.currentPost = {
  title: "最近",
  content: `
🌟Expoをアップデートしたら、Androidで、タブを押すと勝手に水紋みたいなエフェクトがつくのが嫌で、それを避けるために独自のタブボタンにしたら、
今度はwebで開くと、タブを切り替えるたびにリロードが起こる、というおかしな状況になっていたが、それを直すことに成功：

      ＜Tabs
        screenOptions={{
（略）
          // 💡 Webでは標準ボタン（undefined）にしてリロードを防止
          // ネイティブ（Android等）では Pressable を使ってリップルを非表示にする
          // 冗長なようだが、これは絶対に必要なので簡略化などは厳禁！
          tabBarButton:
            Platform.OS === "web"
              ? undefined
              : (props) => {
                  const { ref, ...restProps } = props as any;
                  return ＜Pressable {...restProps} android_ripple={null} /＞;
                },
（以下略）

簡単な説明。

・そもそも、<a>タグがクリックされた時、普通はリロード(くるくる)するのが普通。JS製のサイトなど。
・でも、Expoのrouterは特殊な働きで、<a>タグのクリックを横取りして(PlatformPressableというコンポーネントが担当)、リロードの代わりにURLだけこっそり書き換えてくれてた
・でも、Androidのripple effectが嫌だったので、そのPlatformPressableをやめて自前のボタン(素のPressable)に差し替えた
・そしたらrippleは消えたが、クリックを横取りする係もいなくなり、<a>タグ本来の動作(問答無用でページ丸ごと再取得)が素通りするようになって、毎回リロードするようになった
・戻せばrippleが復活する
・そこで、両方を解決させる案として、処理を端末で分岐させた(Webは標準のPlatformPressableのまま、ネイティブだけ自前のPressableに差し替え)

🌟deprecatedな書き方。
// 修正前
＜View pointerEvents="box-none"＞
// 修正後
＜View style={{ pointerEvents: "box-none" }}＞

// 修正前
noShadow: { shadowOpacity: 0,},
// 修正後
noShadow: { boxShadow: "none",},
  `,
};
