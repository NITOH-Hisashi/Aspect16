function updateDisplay() {
  // 画面の幅と高さを取得
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`${width} x ${height}`);


  // 解像度表示
  document.getElementById("resolution").textContent = `画面解像度: ${width} x ${height}`;

  // アスペクト比を長辺=16として計算
  const longSide = Math.max(width, height);
  const shortSide = Math.min(width, height);
  const ratio = longSide / shortSide;

  // 短辺を16基準で表した場合
  const normalizedShort = 16 / ratio;
  const normalizedShortRounded = Math.round(normalizedShort * 100) / 100;

  document.getElementById("aspectRatio").textContent =
    `アスペクト比（長辺=16とした場合）: 16 : ${normalizedShortRounded}`;
}

// DOMが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  // 初回表示
  updateDisplay();

  // ウィンドウサイズ変更時に更新
  window.addEventListener("resize", updateDisplay);
});
