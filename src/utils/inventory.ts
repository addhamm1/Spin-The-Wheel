import { weightedPick } from './rng';

export interface Segment {
  id: string;
  label: string;
  weight: number;
  type: 'win' | 'lose' | 'try_again';
  inventory: number;
}

export function decrementInventory(segment: Segment): Segment {
  if (segment.type === 'win' && segment.inventory > 0) {
    segment.inventory -= 1;
  }
  return segment;
}

export function pickSegment(segments: Segment[], reroute = true): Segment {
  const available = segments.filter(
    (s) => s.type !== 'win' || s.inventory > 0
  );
  let picked = weightedPick(available.map((s) => ({ item: s, weight: s.weight })));
  if (picked.type === 'win' && picked.inventory === 0 && reroute) {
    const next = available.find((s) => s.type === 'win' && s.inventory > 0);
    if (next) picked = next;
  }
  return picked;
}
