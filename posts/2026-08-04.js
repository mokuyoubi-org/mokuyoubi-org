window.currentPost = {
  title: "Viewで作る自作モーダルではelevationに注意",
  content: `
  **①Modalは、普通のコンポーネントと住んでいる次元が違うので、いかに普通のコンポーネントのz-indexを高くしても、絶対にModalが上に表示されてしまう。**
  
  **②しかしどうしてもModalの上に表示したいコンポーネントがあったので、Viewを使ってモーダル風コンポーネントを自作。**
  
  **③iOSもWebもOK, しかしAndroidでのみ、謎の影が出現。**
  
  **④原因は、elevationプロパティだった。このプロパティは使う必要はない**

  以下、具体的なコードの例および画像。

  return (
    ＜View style={styles.modalOverlay}＞
      (省略)
    ＜/View＞
  );

    modalOverlay: {
    ...StyleSheet.absoluteFillObject, // 画面全体をおおう
    backgroundColor: COLORS.overlay, // 中身は"#00000080"。透明度50%の黒
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50, // 手前に表示させたいコンポーネントより低く
    elevation: 50, // ❌これが余計なプロパティ
  },
  ![image](images/20260804.png)
  elevation: 50
  としてしまうと、画像のような、謎の枠が出現してしまう。
  `,
};
