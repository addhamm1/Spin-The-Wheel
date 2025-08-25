export function getAttempts(storage, key) {
  return Number(storage.getItem(key) ?? '0');
}

export function recordAttempt(storage, key) {
  const count = getAttempts(storage, key) + 1;
  storage.setItem(key, String(count));
  return count;
}
