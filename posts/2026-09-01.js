window.currentPost = {
  title: "AndroidのChromeでもconsoleが見たい！",
  content: `
1. USBでスマホとパソコンを繋ぐ
もちろん、AndroidはDeveloper modeで、USBデバッグもオンにしておく。
パソコンは、
chrome://inspect/#devices
を開いておく

2. adb kill-server && adb devices
をコマンドで実行する。実行場所はルート、つまりターミナルを開いたらすぐに貼り付けていい。

うまくいかなくても、何回か試してみる。USBデバッグもオンオフにしたり。
あと、【Use USB for】をPTPとかにしてみたり。

3. うまくいくと、こんな画面になる。
inspectを押す。
![image](images/DevTools.png)

4. すると...!
![image](images/PastedGraphic.png)

SUGEEE!!
ポケモンダイヤモンド・パールで、謎の場所で規定の歩数歩いて地上に戻ったら、シェイミがいた時と同じくらい、ワクワクした。
ちなみに、iosでも同じようなことはできるみたいです。

  `,
};
