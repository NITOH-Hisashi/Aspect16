function updateDisplay() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  document.getElementById("resolution").textContent = `画面解像度: ${width} x ${height}`;

  const longSide = Math.max(width, height);
  const shortSide = Math.min(width, height);
  const ratio = longSide / shortSide;
  const normalizedShort = 16 / ratio;
  const normalizedShortRounded = Math.round(normalizedShort * 100) / 100;

  document.getElementById("aspectRatio").textContent =
    `アスペクト比（長辺=16とした場合）: 16 : ${normalizedShortRounded}`;
}

// 初回表示
updateDisplay();

// ウィンドウサイズ変更時に更新
window.addEventListener("resize", updateDisplay);
