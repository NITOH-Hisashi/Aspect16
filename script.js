function updateDisplay() {
  const width = window.innerWidth;
  const height = window.innerHeight;

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

// 初回表示
updateDisplay();

// ウィンドウサイズ変更時に更新
window.addEventListener("resize", updateDisplay);
