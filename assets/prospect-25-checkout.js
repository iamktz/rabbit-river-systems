// Future Stan checkout configuration. Paste each real HTTPS checkout URL below.
// Leave null until checkout is available; the HTML then remains honestly disabled.
const STAN_CHECKOUT_URLS = Object.freeze({
  prospectFit: null,
  prospect25: null,
  prospect25Guided: null,
});

document.querySelectorAll('[data-product-checkout]').forEach((container) => {
  const configuredUrl = STAN_CHECKOUT_URLS[container.dataset.productCheckout];
  if (!configuredUrl) return;
  let checkoutUrl;
  try { checkoutUrl = new URL(configuredUrl); } catch { return; }
  if (checkoutUrl.protocol !== 'https:') return;
  const link = document.createElement('a');
  link.className = 'btn';
  link.href = checkoutUrl.href;
  const productName = container.closest('article').querySelector('h3').textContent;
  link.textContent = `Get ${productName}`;
  container.replaceChildren(link);
});
