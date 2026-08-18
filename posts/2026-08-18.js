window.currentPost = {
  title: "タブ",
  content: `
・Expoをアップデートしたら、Androidで、タブを押すと勝手に水紋みたいなエフェクトがつくのが嫌で、それを避けるために独自のタブボタンにしたら、
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
                  return <Pressable {...restProps} android_ripple={null} />;
                },
（以下略）
  `,
};
