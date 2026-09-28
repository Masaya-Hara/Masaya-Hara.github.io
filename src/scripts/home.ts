// Enhance server-rendered lists; all records remain readable without JavaScript.
for (const container of document.querySelectorAll<HTMLElement>('[data-filter-list]')) {
  const items = Array.from(container.querySelectorAll<HTMLElement>('[data-filter-item]'));
  const filters = Array.from(container.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const expand = container.querySelector<HTMLButtonElement>('[data-expand]')!;
  const count = container.querySelector<HTMLElement>('[data-count]')!;
  const empty = container.querySelector<HTMLElement>('[data-empty]')!;
  const limit = Number(container.dataset.limit);
  let selected = 'all';
  let expanded = false;
  const render = () => {
    const matches = items.filter(item => selected === 'all' || item.dataset.tags?.split(' ').includes(selected));
    const visible = new Set(expanded ? matches : matches.slice(0, limit));
    for (const item of items) item.hidden = !visible.has(item);
    for (const filter of filters) filter.setAttribute('aria-pressed', String(filter.dataset.filter === selected));
    expand.hidden = matches.length <= limit;
    expand.setAttribute('aria-expanded', String(expanded));
    expand.textContent = (expanded ? expand.dataset.collapseLabel : expand.dataset.showLabel) ?? '';
    empty.hidden = matches.length > 0;
    count.textContent = (container.dataset.countTemplate ?? '').replace('{shown}', String(visible.size)).replace('{total}', String(matches.length));
    document.dispatchEvent(new Event('homepage:layout'));
  };
  for (const filter of filters) filter.addEventListener('click', () => {
    selected = filter.dataset.filter ?? 'all';
    expanded = false;
    render();
  });
  expand.addEventListener('click', () => {
    const collapsing = expanded;
    expanded = !expanded;
    render();
    // Keep the collapse action in view after a long list shrinks.
    if (collapsing) expand.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  container.querySelector<HTMLElement>('.filter-controls')!.hidden = false;
  container.querySelector<HTMLElement>('.list-controls')!.hidden = false;
  render();
}

let modalTrigger: HTMLElement | null = null;
for (const trigger of document.querySelectorAll<HTMLButtonElement>('[data-open-publication]')) {
  trigger.disabled = false;
  const dialog = document.getElementById(`dialog-${trigger.dataset.openPublication}`) as HTMLDialogElement;
  const open = () => {
    modalTrigger = trigger;
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.querySelector<HTMLElement>('h2')?.focus();
  };
  trigger.addEventListener('click', open);
  const card = trigger.closest<HTMLElement>('[data-publication]')!;
  card.classList.add('is-interactive');
  card.addEventListener('click', event => {
    const target = event.target as Element;
    if (target.closest('a, button') || window.getSelection()?.toString()) return;
    open();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.querySelector('h2'))) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    modalTrigger?.focus({ preventScroll: true });
  });
}
