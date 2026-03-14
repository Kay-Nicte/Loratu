import { getSpecies } from '../config';

// Draw a plant at its growth stage
export function drawPlant(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number, size: number,
  speciesId: string, stage: number
): void {
  const species = getSpecies(speciesId);
  if (!species) return;

  const stemColor = species.color;
  const flowerColor = species.flowerColor;
  const s = size * 0.4;

  // Base position (top of pot)
  const baseY = cy - size * 0.22;

  if (stage === 0) {
    // SEED - small mound with tiny sprout
    ctx.fillStyle = '#6B4226';
    ctx.beginPath();
    ctx.ellipse(cx, baseY, s * 0.25, s * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    // tiny green dot
    ctx.fillStyle = stemColor;
    ctx.beginPath();
    ctx.arc(cx, baseY - s * 0.08, s * 0.06, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (stage === 1) {
    // SPROUT - short stem with two small leaves
    ctx.strokeStyle = stemColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, baseY);
    ctx.lineTo(cx, baseY - s * 0.5);
    ctx.stroke();

    // Two small leaves
    drawLeaf(ctx, cx, baseY - s * 0.35, s * 0.2, -0.5, stemColor);
    drawLeaf(ctx, cx, baseY - s * 0.35, s * 0.2, 0.5, stemColor);
    return;
  }

  if (stage === 2) {
    // YOUNG - taller stem with multiple leaves
    ctx.strokeStyle = stemColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx, baseY);
    ctx.quadraticCurveTo(cx + s * 0.05, baseY - s * 0.5, cx, baseY - s * 0.9);
    ctx.stroke();

    drawLeaf(ctx, cx, baseY - s * 0.3, s * 0.3, -0.6, stemColor);
    drawLeaf(ctx, cx, baseY - s * 0.3, s * 0.3, 0.6, stemColor);
    drawLeaf(ctx, cx, baseY - s * 0.55, s * 0.25, -0.4, stemColor);
    drawLeaf(ctx, cx, baseY - s * 0.55, s * 0.25, 0.4, stemColor);
    drawLeaf(ctx, cx, baseY - s * 0.75, s * 0.2, -0.3, stemColor);
    drawLeaf(ctx, cx, baseY - s * 0.75, s * 0.2, 0.3, stemColor);

    // Small bud
    ctx.fillStyle = flowerColor;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(cx, baseY - s * 0.93, s * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    return;
  }

  // BLOOM (stage 3) - full plant with flowers
  ctx.strokeStyle = stemColor;
  ctx.lineWidth = 3;
  // Main stem
  ctx.beginPath();
  ctx.moveTo(cx, baseY);
  ctx.quadraticCurveTo(cx - s * 0.05, baseY - s * 0.5, cx, baseY - s * 1.1);
  ctx.stroke();

  // Branch stems
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, baseY - s * 0.5);
  ctx.quadraticCurveTo(cx - s * 0.3, baseY - s * 0.7, cx - s * 0.35, baseY - s * 0.9);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, baseY - s * 0.5);
  ctx.quadraticCurveTo(cx + s * 0.3, baseY - s * 0.7, cx + s * 0.35, baseY - s * 0.9);
  ctx.stroke();

  // Leaves
  drawLeaf(ctx, cx, baseY - s * 0.3, s * 0.35, -0.6, stemColor);
  drawLeaf(ctx, cx, baseY - s * 0.3, s * 0.35, 0.6, stemColor);
  drawLeaf(ctx, cx, baseY - s * 0.55, s * 0.3, -0.5, stemColor);
  drawLeaf(ctx, cx, baseY - s * 0.55, s * 0.3, 0.5, stemColor);
  drawLeaf(ctx, cx, baseY - s * 0.8, s * 0.25, -0.3, stemColor);
  drawLeaf(ctx, cx, baseY - s * 0.8, s * 0.25, 0.3, stemColor);

  // Flowers - draw species-specific
  drawFlower(ctx, cx, baseY - s * 1.15, s * 0.2, flowerColor, speciesId);
  drawFlower(ctx, cx - s * 0.35, baseY - s * 0.95, s * 0.15, flowerColor, speciesId);
  drawFlower(ctx, cx + s * 0.35, baseY - s * 0.95, s * 0.15, flowerColor, speciesId);
}

function drawLeaf(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number, color: string): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(size * 0.5, 0, size * 0.5, size * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  // Leaf vein
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size * 0.9, 0);
  ctx.stroke();
  ctx.restore();
}

function drawFlower(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, speciesId: string): void {
  if (speciesId === 'cactus') {
    // Small star flower on top
    ctx.fillStyle = color;
    for (let i = 0; i < 5; i++) {
      const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      ctx.beginPath();
      ctx.ellipse(x + Math.cos(a) * size * 0.3, y + Math.sin(a) * size * 0.3, size * 0.25, size * 0.1, a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#FFE066';
    ctx.beginPath();
    ctx.arc(x, y, size * 0.15, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (speciesId === 'sunflower') {
    // Large petals around center
    ctx.fillStyle = color;
    for (let i = 0; i < 12; i++) {
      const a = (Math.PI * 2 * i) / 12;
      ctx.beginPath();
      ctx.ellipse(x + Math.cos(a) * size * 0.5, y + Math.sin(a) * size * 0.5, size * 0.35, size * 0.12, a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#8B5E3C';
    ctx.beginPath();
    ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (speciesId === 'mushroom') {
    // Mushroom cap
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y - size * 0.2, size * 0.6, size * 0.4, 0, Math.PI, 0);
    ctx.fill();
    // Spots
    ctx.fillStyle = '#FFFDF7';
    ctx.beginPath();
    ctx.arc(x - size * 0.15, y - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + size * 0.2, y - size * 0.3, size * 0.06, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (speciesId === 'bamboo' || speciesId === 'palm') {
    // Drooping fronds
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(
        x + Math.cos(a) * size * 1.2,
        y + Math.sin(a) * size * 0.8,
        x + Math.cos(a) * size * 1.5,
        y + Math.sin(a) * size * 1.2 + size * 0.3
      );
      ctx.stroke();
    }
    return;
  }

  if (speciesId === 'tulip') {
    // Cup-shaped flower
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - size * 0.3, y + size * 0.1);
    ctx.quadraticCurveTo(x - size * 0.4, y - size * 0.5, x, y - size * 0.5);
    ctx.quadraticCurveTo(x + size * 0.4, y - size * 0.5, x + size * 0.3, y + size * 0.1);
    ctx.closePath();
    ctx.fill();
    return;
  }

  if (speciesId === 'bonsai') {
    // Dense foliage cloud
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - size * 0.3, y + size * 0.15, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + size * 0.3, y + size * 0.15, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  // Default: simple petal flower (geranium, lavender, jasmine, bougainvillea, lotus, olive, fern)
  const petalCount = 5;
  ctx.fillStyle = color;
  for (let i = 0; i < petalCount; i++) {
    const a = (Math.PI * 2 * i) / petalCount - Math.PI / 2;
    ctx.beginPath();
    ctx.ellipse(
      x + Math.cos(a) * size * 0.35,
      y + Math.sin(a) * size * 0.35,
      size * 0.25, size * 0.15, a, 0, Math.PI * 2
    );
    ctx.fill();
  }
  // Center
  ctx.fillStyle = '#FFE066';
  ctx.beginPath();
  ctx.arc(x, y, size * 0.12, 0, Math.PI * 2);
  ctx.fill();
}
