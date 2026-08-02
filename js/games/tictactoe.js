const container = document.getElementById("game-container");

if (container) {
  // 1. 勝つパターン（8つの組み合わせ）をあらかじめ決めておく
  const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // ヨコ
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // タテ
    [0, 4, 8],
    [2, 4, 6], // ナナメ
  ];

  // 2. 画面の見た目を作る
  container.innerHTML = `
    <h3 class="font-bold text-[#1b4332] mb-4 text-lg">マルバツゲーム</h3>
    <div id="board" class="grid grid-cols-3 gap-2 w-48 mx-auto mb-4">
      ${Array(9)
        .fill("")
        .map(
          (_, i) => `
        <button class="cell w-14 h-14 bg-white text-2xl font-bold border border-[#2d6a4f]/30 rounded hover:bg-emerald-50 text-[#1b4332] transition-colors" data-index="${i}"></button>
      `,
        )
        .join("")}
    </div>
    <p id="status" class="text-sm text-[#2d6a4f] font-semibold h-6">○ の番</p>
    <button id="reset" class="mt-4 px-4 py-1.5 bg-[#1b4332] text-white text-xs rounded hover:opacity-90 transition-opacity">最初からやり直す</button>
  `;

  let turn = "○";
  let board = Array(9).fill(null);
  let isGameOver = false; // ゲームが終わったかどうかの旗

  const cells = container.querySelectorAll(".cell");
  const status = container.querySelector("#status");

  // 勝敗を判定する関数（ロボットの審判員）
  function checkWinner() {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      // 3つのマスが空じゃなくて、全部同じマークなら勝ち！
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // '○' か '×' を返す
      }
    }
    // 9マス全部埋まって勝者がいなければ引き分け
    if (board.every((cell) => cell !== null)) {
      return "draw";
    }
    return null; // まだ途中
  }

  // マス目がクリックされたときの動き
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;

      // すでにゲームが終わってるか、もう書かれているマスなら無視する
      if (isGameOver || board[idx]) return;

      // 1. 盤面データと画面を更新する
      board[idx] = turn;
      e.target.textContent = turn;

      // 2. 勝敗をチェックする
      const winner = checkWinner();

      if (winner) {
        isGameOver = true;
        if (winner === "draw") {
          status.textContent = "引き分け🤝";
        } else {
          status.textContent = `${winner} の勝ち🎉`;
        }
      } else {
        // 3. まだ続いていれば交代する
        turn = turn === "○" ? "×" : "○";
        status.textContent = `${turn} の番`;
      }
    });
  });

  // リセットボタンを押したときの処理
  container.querySelector("#reset").addEventListener("click", () => {
    board = Array(9).fill(null);
    turn = "○";
    isGameOver = false;
    status.textContent = "○ の番";
    cells.forEach((c) => {
      c.textContent = "";
      c.classList.remove("bg-emerald-100");
    });
  });
}
