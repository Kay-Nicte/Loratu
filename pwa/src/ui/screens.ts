import { t } from '../i18n';
import { getState, placePlant, waterPlants, fertilizePlants, sunPlants, subscribe } from '../state';
import { getSpecies, STAGE_NAMES } from '../config';
import { initPatio, destroyPatio } from '../canvas/patio';
import { renderOnboarding } from './onboarding';
import { openLearnModal } from './learn';
import { openShopModal } from './shop';
import { showModal, closeModal } from './modals';
import { showToast } from './toast';

const app = () => document.getElementById('app')!;

export function startApp(): void {
  subscribe(refreshIfMain);
  const state = getState();
  if (!state.onboardingDone) {
    showOnboarding();
  } else {
    showMain();
  }
}

function showOnboarding(): void {
  renderOnboarding(app(), () => showMain());
}

function showMain(): void {
  const container = app();
  container.innerHTML = `
    <div class="main-screen">
      <div class="resource-bar" id="resource-bar"></div>
      <div class="patio-wrap" id="patio-wrap">
        <canvas id="patio-canvas"></canvas>
      </div>
      <div class="action-bar" id="action-bar">
        <button class="action-btn" id="btn-water">${t('actions.water')}</button>
        <button class="action-btn" id="btn-fertilize">${t('actions.fertilize')}</button>
        <button class="action-btn" id="btn-sun">${t('actions.sun')}</button>
        <button class="action-btn action-learn" id="btn-learn">${t('tabs.learn')}</button>
        <button class="action-btn action-shop" id="btn-shop">${t('tabs.shop')}</button>
      </div>
    </div>
  `;

  updateResourceBar();
  const canvas = container.querySelector('#patio-canvas') as HTMLCanvasElement;
  initPatio(canvas, handleSpotTap);

  container.querySelector('#btn-water')!.addEventListener('click', () => {
    const grew = waterPlants();
    showToast(t('actions.watering'));
    if (grew) setTimeout(() => showToast(t('actions.plantGrew')), 1200);
    updateResourceBar();
  });
  container.querySelector('#btn-fertilize')!.addEventListener('click', () => {
    const grew = fertilizePlants();
    showToast(t('actions.fertilizing'));
    if (grew) setTimeout(() => showToast(t('actions.plantGrew')), 1200);
    updateResourceBar();
  });
  container.querySelector('#btn-sun')!.addEventListener('click', () => {
    const grew = sunPlants();
    showToast(t('actions.sunning'));
    if (grew) setTimeout(() => showToast(t('actions.plantGrew')), 1200);
    updateResourceBar();
  });
  container.querySelector('#btn-learn')!.addEventListener('click', () => {
    openLearnModal(() => updateResourceBar());
  });
  container.querySelector('#btn-shop')!.addEventListener('click', () => {
    openShopModal(() => updateResourceBar());
  });
}

function refreshIfMain(): void {
  if (document.getElementById('resource-bar')) {
    updateResourceBar();
  }
}

function updateResourceBar(): void {
  const bar = document.getElementById('resource-bar');
  if (!bar) return;
  const r = getState().resources;
  bar.innerHTML = `
    <span class="res-item res-water">${t('resources.water')}: ${r.water}</span>
    <span class="res-item res-fert">${t('resources.fertilizer')}: ${r.fertilizer}</span>
    <span class="res-item res-sun">${t('resources.sun')}: ${r.sun}</span>
    <span class="res-item res-pts">${t('resources.points')}: ${r.points}</span>
  `;
}

function handleSpotTap(index: number): void {
  const state = getState();
  const slot = state.spots[index];

  if (slot?.plantId) {
    // Show plant detail
    const plant = state.plants.find(p => p.id === slot.plantId);
    if (!plant) return;
    const species = getSpecies(plant.speciesId);
    if (!species) return;

    const threshold = plant.stage < 3 ? species.growthRequirements[plant.stage] : 0;
    const progress = plant.stage >= 3 ? 100 : Math.floor((plant.growthPts / threshold) * 100);
    const stageName = t(STAGE_NAMES[plant.stage]);

    const div = document.createElement('div');
    div.className = 'detail-modal';
    div.innerHTML = `
      <h2>${t(species.nameKey)}</h2>
      <p>${t('plant.stage')}: ${stageName}</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      <p>${t('plant.progress')}: ${progress}%</p>
      <button class="btn-primary" id="detail-close">OK</button>
    `;
    showModal(div);
    div.querySelector('#detail-close')!.addEventListener('click', () => closeModal());
    return;
  }

  // Empty spot - show plant picker
  const inv = state.inventory;
  if (inv.length === 0) {
    showToast(t('patio.noPlants'));
    return;
  }

  const div = document.createElement('div');
  div.className = 'picker-modal';
  div.innerHTML = `<h2>${t('patio.choosePlant')}</h2><div class="picker-grid" id="picker-grid"></div>`;

  const grid = div.querySelector('#picker-grid')!;
  // Deduplicate inventory for display
  const seen = new Set<string>();
  for (const speciesId of inv) {
    if (seen.has(speciesId)) continue;
    seen.add(speciesId);
    const sp = getSpecies(speciesId);
    if (!sp) continue;
    const btn = document.createElement('button');
    btn.className = 'picker-btn';
    btn.textContent = t(sp.nameKey);
    btn.addEventListener('click', () => {
      placePlant(speciesId, index);
      closeModal();
      updateResourceBar();
    });
    grid.appendChild(btn);
  }

  showModal(div);
}
