let toastEl: HTMLDivElement | null = null;
let hideTimer = 0;

export function showToast(msg: string, durationMs = 2000): void {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('visible');
  clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => {
    toastEl?.classList.remove('visible');
  }, durationMs);
}
