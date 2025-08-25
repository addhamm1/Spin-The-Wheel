export function getAttempts(storage: Storage, key: string): number {
  return Number(storage.getItem(key) ?? '0');
}

export function recordAttempt(storage: Storage, key: string): number {
  const count = getAttempts(storage, key) + 1;
  storage.setItem(key, String(count));
  return count;
}
