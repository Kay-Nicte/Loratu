import { t } from '../i18n';
import { STARTER_SPECIES, STARTER_SEED_COUNT } from '../config';
import { completeOnboarding } from '../state';

export function renderOnboarding(container: HTMLElement, onDone: () => void): void {
  const selected = new Set<string>();

  const div = document.createElement('div');
  div.className = 'onboarding';

  div.innerHTML = `
    <h1 class="onboarding-title">${t('onboarding.welcome')}</h1>
    <p class="onboarding-sub">${t('onboarding.subtitle')}</p>
    <h2 class="onboarding-pick">${t('onboarding.chooseSeeds')}</h2>
    <div class="seed-grid" id="seed-grid"></div>
    <p class="onboarding-hint" id="pick-hint">${t('onboarding.pickExactly')}</p>
    <button class="btn-primary" id="btn-start" disabled>${t('onboarding.start')}</button>
  `;

  container.innerHTML = '';
  container.appendChild(div);

  const grid = div.querySelector('#seed-grid')!;
  const hint = div.querySelector('#pick-hint') as HTMLElement;
  const btn = div.querySelector('#btn-start') as HTMLButtonElement;

  for (const sp of STARTER_SPECIES) {
    const card = document.createElement('div');
    card.className = 'seed-card';
    card.dataset.id = sp.id;
    card.innerHTML = `<span class="seed-name">${t(sp.nameKey)}</span>`;
    card.addEventListener('click', () => {
      if (selected.has(sp.id)) {
        selected.delete(sp.id);
        card.classList.remove('selected');
      } else {
        if (selected.size >= STARTER_SEED_COUNT) {
          hint.textContent = t('onboarding.onlyThree');
          return;
        }
        selected.add(sp.id);
        card.classList.add('selected');
      }
      btn.disabled = selected.size !== STARTER_SEED_COUNT;
      if (selected.size < STARTER_SEED_COUNT) {
        hint.textContent = t('onboarding.pickExactly');
      } else {
        hint.textContent = '';
      }
    });
    grid.appendChild(card);
  }

  btn.addEventListener('click', () => {
    completeOnboarding([...selected]);
    onDone();
  });
}
