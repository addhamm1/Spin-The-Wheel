export function randomFloat() {
  const cryptoObj = globalThis.crypto || require('crypto').webcrypto;
  const array = new Uint32Array(1);
  cryptoObj.getRandomValues(array);
  return array[0] / 0xffffffff;
}

export function weightedPick(items) {
  const total = items.reduce((sum, it) => sum + Math.max(it.weight, 0), 0);
  if (total === 0) {
    throw new Error('No items with positive weight');
  }
  const r = randomFloat() * total;
  let acc = 0;
  for (const it of items) {
    acc += Math.max(it.weight, 0);
    if (r < acc) return it.item;
  }
  return items[items.length - 1].item;
}
