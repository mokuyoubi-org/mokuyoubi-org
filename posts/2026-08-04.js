window.currentPost = {
  title: "Viewで作る自作モーダルではelevationに注意",
  content: `
  Android固有の挙動。バグではないことがわかった。

  import { Modal } from "react-native";

  で得られるデフォルトのModalは、他のComponentくんたちと住んでいる次元が違うらしく、いかにComponentのzIndexを大きくしようが絶対に越えられないらしい。
  そこで、どうしてもモーダルより手前に表示させたいコンポーネントがあったため、とあるモーダルにViewになってもらった。

  if (!visible) return null;
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
    elevation: 50, // 🌟
  },
  ![image](images/screenshot20260804.png)
  すると画像の通り、謎の枠が出現してとても困っていたのだが、これはelevationのせいだったのだと判明した。
  他のcomponentの何かと競合？してしまっているのかと試行錯誤したのだが、ただの影だったのである。
  `,
};
