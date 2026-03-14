import { colors } from '../theme';

export function drawPot(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, isEmpty: boolean): void {
  const w = size * 0.7;
  const h = size * 0.55;
  const rimH = h * 0.15;
  const topW = w;
  const botW = w * 0.6;

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.12)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.52, w * 0.45, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pot body - trapezoid
  const grad = ctx.createLinearGradient(cx - topW / 2, cy, cx + topW / 2, cy);
  grad.addColorStop(0, colors.clayDark);
  grad.addColorStop(0.3, colors.clay);
  grad.addColorStop(0.7, colors.clay);
  grad.addColorStop(1, colors.clayDark);
  ctx.fillStyle = grad;

  ctx.beginPath();
  ctx.moveTo(cx - topW / 2, cy - h / 2 + rimH);
  ctx.lineTo(cx + topW / 2, cy - h / 2 + rimH);
  ctx.lineTo(cx + botW / 2, cy + h / 2);
  ctx.lineTo(cx - botW / 2, cy + h / 2);
  ctx.closePath();
  ctx.fill();

  // Azulejo band on pot
  const bandY = cy - h * 0.05;
  const bandH = h * 0.15;
  const bandW1 = topW * 0.85;
  const bandW2 = topW * 0.78;
  ctx.fillStyle = colors.tileBlue;
  ctx.beginPath();
  ctx.moveTo(cx - bandW1 / 2, bandY - bandH / 2);
  ctx.lineTo(cx + bandW1 / 2, bandY - bandH / 2);
  ctx.lineTo(cx + bandW2 / 2, bandY + bandH / 2);
  ctx.lineTo(cx - bandW2 / 2, bandY + bandH / 2);
  ctx.closePath();
  ctx.fill();

  // Small white diamonds on band
  const diamondCount = 3;
  const spacing = bandW1 / (diamondCount + 1);
  ctx.fillStyle = colors.tileWhite;
  for (let i = 1; i <= diamondCount; i++) {
    const dx = cx - bandW1 / 2 + spacing * i;
    const ds = bandH * 0.3;
    ctx.beginPath();
    ctx.moveTo(dx, bandY - ds);
    ctx.lineTo(dx + ds, bandY);
    ctx.lineTo(dx, bandY + ds);
    ctx.lineTo(dx - ds, bandY);
    ctx.closePath();
    ctx.fill();
  }

  // Rim
  ctx.fillStyle = colors.clayRim;
  ctx.beginPath();
  ctx.moveTo(cx - topW / 2 - 2, cy - h / 2);
  ctx.lineTo(cx + topW / 2 + 2, cy - h / 2);
  ctx.lineTo(cx + topW / 2, cy - h / 2 + rimH);
  ctx.lineTo(cx - topW / 2, cy - h / 2 + rimH);
  ctx.closePath();
  ctx.fill();

  // Soil if empty
  if (isEmpty) {
    ctx.fillStyle = '#6B4226';
    ctx.beginPath();
    ctx.ellipse(cx, cy - h / 2 + rimH + 2, topW * 0.38, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}
