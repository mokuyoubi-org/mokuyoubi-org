window.currentPost = {
  title: "Androidで本番アプリのログを表示したい",
  content: `
  ①まず、ターミナルを開いて、 # 🌟のコマンドを行う
mokuyoubi@xxx ~ % 
adb kill-server # 🌟
adb start-server # 🌟
adb devices # 🌟
cannot connect to daemon at tcp:5037: Connection refused
* daemon not running; starting now at tcp:5037
* daemon started successfully
List of devices attached
xxx	device

②次に、 # 🌟のコマンドを行う
mokuyoubi@xxx ~ % 
adb logcat "*:S" ReactNative:V ReactNativeJS:V # 🌟

すると、

--------- beginning of main
09-09 02:59:47.266 xxx I ReactNativeJS: Running "main"
(...省略...)
09-09 03:00:02.927 xxx E ReactNativeJS: '匿名ログイン失敗(CAPTCHA):', [Error: Turnstile token request timed out]
09-09 03:03:21.300 xxx E ReactNativeJS: 'Turnstile error code:', '300030'

こんな感じで、エラーの原因が見られる。
  `,
};
