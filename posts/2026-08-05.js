window.currentPost = {
  title: "FlatListの要素がめくるたび微妙にずれていく問題",
  content: `
  FlatListというのは、Tiktokみたいなやつ(?)。
  スワイプするたびに微妙にページがずれていってしまう、という問題。

  解決策は簡単: 
  要素の高さがheightだとしたら、
  PixelRatio.roundToNearestPixel(height)
  で解決。詳しくはGeminiに。
  `,
};
