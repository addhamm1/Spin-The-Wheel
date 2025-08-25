import { test } from 'node:test';
import assert from 'node:assert/strict';
import { weightedPick } from '../src/utils/rng.js';
import { decrementInventory, pickSegment } from '../src/utils/inventory.js';

test('weightedPick respects weights', () => {
  Object.defineProperty(globalThis, 'crypto', {
    value: { getRandomValues: (arr) => { arr[0] = 0; } },
    configurable: true
  });
  const items = [
    { item: 'A', weight: 1 },
    { item: 'B', weight: 3 }
  ];
  assert.equal(weightedPick(items), 'A');

  Object.defineProperty(globalThis, 'crypto', {
    value: { getRandomValues: (arr) => { arr[0] = 0xffffffff; } },
    configurable: true
  });
  assert.equal(weightedPick(items), 'B');
});

test('decrementInventory reduces stock', () => {
  const seg = { id: 'x', label: 'Prize', weight: 1, type: 'win', inventory: 2 };
  decrementInventory(seg);
  assert.equal(seg.inventory, 1);
});

test('pickSegment reroutes when no stock', () => {
  const segments = [
    { id: '1', label: 'A', weight: 1, type: 'win', inventory: 0, color: '#fff' },
    { id: '2', label: 'B', weight: 1, type: 'win', inventory: 2, color: '#fff' }
  ];
  Object.defineProperty(globalThis, 'crypto', {
    value: { getRandomValues: (arr) => { arr[0] = 0; } },
    configurable: true
  });
  const result = pickSegment(segments, true);
  assert.equal(result.id, '2');
});
