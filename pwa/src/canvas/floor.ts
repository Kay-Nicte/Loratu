import { colors } from '../theme';

export function drawFloor(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  // Azulejo tile pattern - blue and white geometric
  const tileSize = Math.max(20, Math.floor(w / 16));
  const startY = h * 0.08;
  const floorH = h * 0.92;

  // Base floor
  ctx.fillStyle = colors.tileWhite;
  ctx.fillRect(0, startY, w, floorH);

  for (let y = startY; y < h; y += tileSize) {
    for (let x = 0; x < w; x += tileSize) {
      const col = Math.floor(x / tileSize);
      const row = Math.floor((y - startY) / tileSize);
      const isCheck = (col + row) % 2 === 0;

      if (isCheck) {
        // Blue tile with diamond pattern
        ctx.fillStyle = colors.tileBlue;
        ctx.fillRect(x, y, tileSize, tileSize);

        // White diamond inside
        ctx.fillStyle = colors.tileWhite;
        const cx = x + tileSize / 2;
        const cy = y + tileSize / 2;
        const s = tileSize * 0.3;
        ctx.beginPath();
        ctx.moveTo(cx, cy - s);
        ctx.lineTo(cx + s, cy);
        ctx.lineTo(cx, cy + s);
        ctx.lineTo(cx - s, cy);
        ctx.closePath();
        ctx.fill();
      } else {
        // White tile with small blue accent
        ctx.fillStyle = colors.tileWhite;
        ctx.fillRect(x, y, tileSize, tileSize);
        ctx.fillStyle = colors.tileBlueLight;
        const dot = tileSize * 0.12;
        ctx.fillRect(x + tileSize / 2 - dot, y + tileSize / 2 - dot, dot * 2, dot * 2);
      }

      // Tile border
      ctx.strokeStyle = colors.wallShadow;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x, y, tileSize, tileSize);
    }
  }
}
