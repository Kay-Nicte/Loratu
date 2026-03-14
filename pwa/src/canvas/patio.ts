import { colors } from '../theme';
import { SPOT_POSITIONS } from '../config';
import { getState } from '../state';
import { drawFloor } from './floor';
import { drawFountain } from './fountain';
import { drawPot } from './pot';
import { drawPlant } from './plant';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let animId = 0;
let onSpotTap: ((index: number) => void) | null = null;

export function initPatio(canvasEl: HTMLCanvasElement, tapHandler: (index: number) => void): void {
  canvas = canvasEl;
  ctx = canvas.getContext('2d')!;
  onSpotTap = tapHandler;

  canvas.addEventListener('click', handleClick);
  canvas.addEventListener('touchend', handleTouch);

  resize();
  window.addEventListener('resize', resize);
  renderLoop();
}

export function destroyPatio(): void {
  cancelAnimationFrame(animId);
  window.removeEventListener('resize', resize);
  canvas.removeEventListener('click', handleClick);
  canvas.removeEventListener('touchend', handleTouch);
}

function resize(): void {
  const parent = canvas.parentElement!;
  const dpr = window.devicePixelRatio || 1;
  const w = parent.clientWidth;
  const h = parent.clientHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function getSpotPixels(w: number, h: number): Array<{ x: number; y: number }> {
  return SPOT_POSITIONS.map(sp => ({
    x: (sp.xPercent / 100) * w,
    y: (sp.yPercent / 100) * h,
  }));
}

function handleClick(e: MouseEvent): void {
  const rect = canvas.getBoundingClientRect();
  checkTap(e.clientX - rect.left, e.clientY - rect.top);
}

function handleTouch(e: TouchEvent): void {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const t = e.changedTouches[0];
  checkTap(t.clientX - rect.left, t.clientY - rect.top);
}

function checkTap(tx: number, ty: number): void {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const spots = getSpotPixels(w, h);
  const potSize = Math.min(w, h) * 0.11;

  for (let i = 0; i < spots.length; i++) {
    const dx = tx - spots[i].x;
    const dy = ty - spots[i].y;
    if (Math.sqrt(dx * dx + dy * dy) < potSize) {
      onSpotTap?.(i);
      return;
    }
  }
}

function renderLoop(): void {
  draw();
  animId = requestAnimationFrame(renderLoop);
}

function draw(): void {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const state = getState();

  // Clear
  ctx.clearRect(0, 0, w, h);

  // Sky gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.15);
  skyGrad.addColorStop(0, colors.skyTop);
  skyGrad.addColorStop(1, colors.skyBottom);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h * 0.15);

  // Walls
  ctx.fillStyle = colors.wall;
  ctx.fillRect(0, h * 0.05, w, h * 0.1);

  // Terracotta arches along top wall
  const archCount = 5;
  const archW = w / archCount;
  ctx.strokeStyle = colors.terra;
  ctx.lineWidth = 3;
  ctx.fillStyle = colors.skyBottom;
  for (let i = 0; i < archCount; i++) {
    const ax = archW * i + archW / 2;
    const ay = h * 0.1;
    ctx.beginPath();
    ctx.arc(ax, ay, archW * 0.35, Math.PI, 0);
    ctx.fill();
    ctx.stroke();
  }

  // Wall line
  ctx.fillStyle = colors.wall;
  ctx.fillRect(0, h * 0.1, w, h * 0.04);
  ctx.strokeStyle = colors.tileTerra;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.14);
  ctx.lineTo(w, h * 0.14);
  ctx.stroke();

  // Floor tiles
  drawFloor(ctx, w, h);

  // Bougainvillea dots on walls
  ctx.fillStyle = colors.pinkDark;
  const bougCount = 20;
  for (let i = 0; i < bougCount; i++) {
    const bx = (i / bougCount) * w + Math.sin(i * 3.7) * 15;
    const by = h * 0.06 + Math.cos(i * 2.3) * h * 0.025;
    const br = 2 + Math.abs(Math.sin(i * 1.5)) * 3;
    ctx.beginPath();
    ctx.arc(bx, by, br, 0, Math.PI * 2);
    ctx.fill();
  }
  // Some green leaves for bougainvillea
  ctx.fillStyle = colors.greenMid;
  for (let i = 0; i < 12; i++) {
    const bx = (i / 12) * w + Math.sin(i * 5.1) * 20;
    const by = h * 0.065 + Math.cos(i * 3.1) * h * 0.02;
    ctx.beginPath();
    ctx.ellipse(bx, by, 5, 2.5, Math.sin(i) * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Fountain (center)
  const fountainSize = Math.min(w, h) * 0.2;
  drawFountain(ctx, w * 0.5, h * 0.47, fountainSize);

  // Pots and plants
  const spots = getSpotPixels(w, h);
  const potSize = Math.min(w, h) * 0.11;

  for (let i = 0; i < spots.length; i++) {
    const sp = spots[i];
    const slot = state.spots[i];
    const plant = slot?.plantId ? state.plants.find(p => p.id === slot.plantId) : null;

    drawPot(ctx, sp.x, sp.y, potSize, !plant);

    if (plant) {
      drawPlant(ctx, sp.x, sp.y, potSize, plant.speciesId, plant.stage);
    }
  }
}

export { canvas };
