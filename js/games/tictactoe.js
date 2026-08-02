const container = document.getElementById("game-container");

if (container) {
  const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

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
    <p id="status" class="text-sm text-[#2d6a4f] font-semibold h-6">あなたの番（○）</p>
    <button id="reset" class="mt-4 px-4 py-1.5 bg-[#1b4332] text-white text-xs rounded hover:opacity-90 transition-opacity">最初からやり直す</button>
  `;

  let turn = "○"; // ○は社長（プレイヤー）、×はボット！
  let board = Array(9).fill(null);
  let isGameOver = false;

  const cells = container.querySelectorAll(".cell");
  const status = container.querySelector("#status");

  function checkWinner() {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every((cell) => cell !== null)) {
      return "draw";
    }
    return null;
  }

  // ★ボットのターン（ランダムに選ぶ！）
  function botTurn() {
    if (isGameOver) return;

    // 1. 空いているマスの番号をぜんぶ集める
    const emptyIndices = [];
    board.forEach((val, idx) => {
      if (val === null) emptyIndices.push(idx);
    });

    // 空きがなかったらおしまい
    if (emptyIndices.length === 0) return;

    // 2. 空いているマスの中からランダムで1つ選ぶ！
    const randomIndex = Math.floor(Math.random() * emptyIndices.length);
    const chosenIndex = emptyIndices[randomIndex];

    // 3. ボット（×）のマークをつける
    board[chosenIndex] = "×";
    cells[chosenIndex].textContent = "×";

    // 4. 勝敗をチェックする
    const winner = checkWinner();
    if (winner) {
      isGameOver = true;
      if (winner === "draw") {
        status.textContent = "引き分け🤝";
      } else {
        status.textContent = "ボット（×）の勝ち🎉";
      }
    } else {
      // プレイヤーの番に戻す
      turn = "○";
      status.textContent = "あなたの番（○）";
    }
  }

  // マス目がクリックされたときの動き
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;

      // ゲーム終了か、自分の番（○）じゃない時、すでに埋まってる場所は無視する
      if (isGameOver || board[idx] || turn !== "○") return;

      // 1. プレイヤー（○）のマークを塗る
      board[idx] = "○";
      e.target.textContent = "○";

      // 2. 勝敗チェック
      const winner = checkWinner();

      if (winner) {
        isGameOver = true;
        if (winner === "draw") {
          status.textContent = "引き分け🤝";
        } else {
          status.textContent = "あなたの勝ち🎉";
        }
      } else {
        // 3. 次はボットの番
        turn = "×";
        status.textContent = "ボットが考えてます...";

        // ちょっとだけ待ってからボットが打つと、生きているみたいで可愛い
        setTimeout(() => {
          botTurn();
        }, 500);
      }
    });
  });

  // リセットボタン
  container.querySelector("#reset").addEventListener("click", () => {
    board = Array(9).fill(null);
    turn = "○";
    isGameOver = false;
    status.textContent = "あなたの番（○）";
    cells.forEach((c) => {
      c.textContent = "";
      c.classList.remove("bg-emerald-100");
    });
  });
}
