# Aspect16
JavaScript で「画面の縦横のピクセル数」と「画面のアスペクト比を **長辺16** としたときの短辺の長さ（比率）」を表示する。

---

## ✅ 目的

1. 実際の画面サイズ（ピクセル）を取得する
2. アスペクト比（長辺を 16 としたときの短辺）を計算して表示

---



## ✅ 出力例（スマホの場合）

* 画面解像度: `390 x 844`
* アスペクト比（長辺=16とした場合）: `16 : 7.39`

https://nitoh-hisashi.github.io/Aspect16/

### SONY Xperia 5 IV
![Screenshot_20250514-144645](https://github.com/user-attachments/assets/dfc012be-dda0-4053-b24a-9da499219d26)
![Screenshot_20250514-144702](https://github.com/user-attachments/assets/b4f61f54-92ec-47af-97e5-4a4421bb06dd)

### Apple iPhone SE 3
![IMG_0156](https://github.com/user-attachments/assets/ca79b0d2-291d-4326-a5e0-aa194b41104b)
![IMG_0157](https://github.com/user-attachments/assets/69647de1-7e26-4489-96a2-6c806701448b)

### Apple iPhone 12 mini
![IMG_0021](https://github.com/user-attachments/assets/7a2fb5cc-f8d8-4745-9dc4-8f2ccd442ef0)
![IMG_0022](https://github.com/user-attachments/assets/4d3a7c4a-edc4-4871-9e75-d5e01175ad32)

### Apple iPad 7
![IMG_0012](https://github.com/user-attachments/assets/67830aba-8b01-4297-b36a-8cb7928b1738)
![IMG_0011](https://github.com/user-attachments/assets/e1be56d0-da94-48d4-9705-72072c6a8366)

---

## ✅ 補足

* `window.innerWidth` / `innerHeight` はブラウザのビューポートサイズ（実際に表示される領域）を取得します。
* 長辺を固定（16）として短辺の比率を出すことで、表示サイズに依存しない「見た目の比率」がわかります。

---

