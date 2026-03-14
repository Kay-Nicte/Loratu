const overlay = (): HTMLDivElement => {
  let el = document.getElementById('modal-overlay') as HTMLDivElement | null;
  if (!el) {
    el = document.createElement('div');
    el.id = 'modal-overlay';
    el.className = 'modal-overlay';
    document.body.appendChild(el);
  }
  return el;
};

export function showModal(content: HTMLElement): void {
  const ov = overlay();
  ov.innerHTML = '';
  const box = document.createElement('div');
  box.className = 'modal-box';
  box.appendChild(content);
  ov.appendChild(box);
  ov.classList.add('visible');

  ov.addEventListener('click', (e) => {
    if (e.target === ov) closeModal();
  }, { once: true });
}

export function closeModal(): void {
  const ov = document.getElementById('modal-overlay');
  if (ov) ov.classList.remove('visible');
}
