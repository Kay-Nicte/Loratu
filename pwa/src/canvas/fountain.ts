import { colors } from '../theme';

let waterFrame = 0;

export function drawFountain(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number): void {
  waterFrame++;
  const s = size;

  // Base - stone octagon
  ctx.fillStyle = colors.wallShadow;
  ctx.beginPath();
  const sides = 8;
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 8;
    const x = cx + Math.cos(angle) * s * 0.55;
    const y = cy + Math.sin(angle) * s * 0.35;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  // Water basin
  ctx.fillStyle = colors.fountain;
  ctx.beginPath();
  ctx.ellipse(cx, cy, s * 0.45, s * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  // Animated water ripples
  ctx.strokeStyle = colors.water;
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 3; i++) {
    const phase = (waterFrame * 0.03 + i * 2.1) % 3;
    const r = phase / 3;
    ctx.globalAlpha = 1 - r;
    ctx.beginPath();
    ctx.ellipse(cx, cy, s * 0.15 + s * 0.3 * r, s * 0.09 + s * 0.18 * r, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Central column
  ctx.fillStyle = colors.wall;
  ctx.fillRect(cx - s * 0.06, cy - s * 0.3, s * 0.12, s * 0.3);

  // Top bowl
  ctx.fillStyle = colors.wallShadow;
  ctx.beginPath();
  ctx.ellipse(cx, cy - s * 0.3, s * 0.15, s * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();

  // Water spout drops
  ctx.fillStyle = colors.water;
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI * 2 * i) / 4 + waterFrame * 0.02;
    const dropPhase = ((waterFrame * 0.05 + i * 1.5) % 1);
    const dx = cx + Math.cos(angle) * s * 0.1 * (1 + dropPhase);
    const dy = cy - s * 0.28 + s * 0.25 * dropPhase * dropPhase;
    const dropSize = s * 0.025 * (1 - dropPhase * 0.5);
    ctx.beginPath();
    ctx.arc(dx, dy, dropSize, 0, Math.PI * 2);
    ctx.fill();
  }

  // Rim highlight
  ctx.strokeStyle = colors.wall;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, s * 0.48, s * 0.3, 0, Math.PI * 1.1, Math.PI * 1.9);
  ctx.stroke();
}
