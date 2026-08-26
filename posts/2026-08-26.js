window.currentPost = {
  title: "パッケージ作った",
  content: `
今日は初めてパッケージを作った。
なんとなく、せっかくの機会だし、なんかかっこいい気がするし、ということでclaudeくんやgeminiくんに教えてもらいながら作った。

import { useKataGo } from "expo-katago";
とか
import { KataGoGate } from "expo-katago";
みたいに使う。useKataGoは名前の通りExpoアプリでKataGoが使えるようになる。
KataGoGateはプロバイダみたいな感じ。_layoutとかで包むと、その範囲ならuseKataGoが使えるようになるっていうやつ。

🌟やったこと
・expoフォルダ直下に、packagesフォルダを作る。その中にexpo-katagoフォルダを作る。
・expo-katagoフォルダの直下にあるのは、assetsフォルダ、srcフォルダ、package.json, README.md, tsconfig.json。
srcフォルダにはts/tsxファイル。
あと、assets.d.tsっていうファイルもあって、これはlint用。中身は
declare module "*.bin.gz" {
  const value: number;
  export default value;
}
  こんな感じ。これがないと、bin.gzってなんじゃい！！！とか、いろいろ言ってくるからこの設定をした、気がする。

assetsフォルダの中にはmodelsフォルダ、その中にkataGoの重み(b6.bin.gz, 同b10, 同b18)が入ってる。
README.mdはパッケージの使い方。
tsconfig.jsonの中身は

{
  "compilerOptions": {
    "rootDir": "./src", 
    "composite": true,
    "skipLibCheck": true,
    "jsx": "react-native"
  },
  "include": ["src/**/*"] 
}

こんな感じ。


・.vscode/settings.jsonをいじった。具体的には
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit",
    "source.sortMembers": "explicit"
  },
  "git.ignoreLimitWarning": true,

  // 🛡️ VS Code の ESLint 職人に Flat Config を教える設定
  "eslint.useFlatConfig": true,
  "eslint.workingDirectories": [{ "mode": "auto" }]
}
こんな感じになってる。

・あと、package.jsonで、
{
  "name": "アプリ名",
  "workspaces": [
    "packages/*"
  ],

  こんな感じでworkspacesを追加した。そして、追加したら、npm installをしたと思う。


・あと、expoフォルダ直下のmetro.config.jsも書き換えたと思う。
こんな感じ。やっぱりgzってなんやねんへの対処だったかな。

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("gz");

module.exports = withNativeWind(config, { input: "./global.css" });


・あと、同様にexpoフォルダ直下のeslint.config.jsも書き換えたと思う。
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const reactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      "react-native/no-unused-styles": "warn",
      "react-hooks/exhaustive-deps": "off",
    },
  },

// 🛡️ expo-katago から「外の世界」への import を完全にブロックする
  {
    files: ["**/packages/expo-katago/src/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@",
                "@/*",
                "@/**",
                "../../*",
                "../../../*",
                "../../../../*"
              ],
              message: "expo-katagoの中から親アプリのコードをimportしてはいけない"
            }
          ]
        }
      ]
    }
  },
  {
    ignores: ["dist/*"],
  },
]);

・expoフォルダ直下のtsconfig.json(上のとは違う)は書き換えたか書き換えてないかわからん。一応貼っておこう

{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "typeRoots": ["./node_modules/@types"],
    "baseUrl": ".",
    "ignoreDeprecations": "6.0",
    "jsx": "react",
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  },

  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "nativewind-env.d.ts"
  ]
}


🌟気をつけたこと
元々expo内にあったコードを全部外に取り出して彼らの世界の中で完結させるわけなので、依存関係は全部断ち切る。
上のtsconfigだやれ、.vscode/settings.jsonだやれ、assets.d.tsだやれ、全部そこら辺が関係してる。
で、expo-katago内ではパスに@は一切使わない。紛らわしいからだ。なので、みんな./みたいな感じになってる。


🌟作ってみて
katago関連のコードが全部外部化、というか、ができてとてもスッキリ。とても気に入っている。claudeくん、geminiくん、ありがとう。

  `,
};
