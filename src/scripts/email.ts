for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy-email]')) {
  const status = button.parentElement!.querySelector<HTMLElement>('.email-status')!;
  let resetTimer: ReturnType<typeof setTimeout> | undefined;
  button.hidden = false;
  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    button.textContent = button.dataset.label ?? '';
    status.textContent = '';
    status.classList.add('sr-only');
    try {
      const address = [button.dataset.local, button.dataset.domain].join('@');
      await navigator.clipboard.writeText(address);
      button.textContent = button.dataset.copied ?? '';
      status.textContent = button.dataset.copied ?? '';
      resetTimer = setTimeout(() => {
        button.textContent = button.dataset.label ?? '';
        status.textContent = '';
      }, 2500);
    } catch {
      status.classList.remove('sr-only');
      status.textContent = button.dataset.error ?? '';
    }
  });
}
