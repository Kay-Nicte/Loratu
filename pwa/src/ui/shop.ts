import { t } from '../i18n';
import { SHOP_SPECIES } from '../config';
import { buyPlant, getState } from '../state';
import { showModal, closeModal } from './modals';
import { showToast } from './toast';

export function openShopModal(onDone: () => void): void {
  const div = document.createElement('div');
  div.className = 'shop-modal';

  function render(): void {
    const state = getState();
    div.innerHTML = `
      <h2>${t('shop.title')}</h2>
      <p class="shop-sub">${t('shop.subtitle')}</p>
      <p class="shop-points">${t('resources.points')}: ${state.resources.points}</p>
      <div class="shop-grid" id="shop-grid"></div>
      <button class="btn-secondary shop-close" id="shop-close">X</button>
    `;

    const grid = div.querySelector('#shop-grid')!;
    for (const sp of SHOP_SPECIES) {
      const owned = state.shopOwned.includes(sp.id);
      const card = document.createElement('div');
      card.className = 'shop-card' + (owned ? ' owned' : '');
      card.innerHTML = `
        <span class="shop-name">${t(sp.nameKey)}</span>
        <span class="shop-cost">${owned ? t('shop.owned') : sp.shopCost + ' pts'}</span>
      `;
      if (!owned) {
        card.addEventListener('click', () => {
          const ok = buyPlant(sp.id, sp.shopCost!);
          if (ok) {
            showToast(`${t(sp.nameKey)}!`);
            render();
          } else {
            showToast(`${sp.shopCost} ${t('resources.points')}`);
          }
        });
      }
      grid.appendChild(card);
    }

    div.querySelector('#shop-close')!.addEventListener('click', () => {
      closeModal();
      onDone();
    });
  }

  render();
  showModal(div);
}
