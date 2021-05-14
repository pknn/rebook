import Sizing, { toUnit } from '.';
import { Entries } from '../../types/Entries';

export interface Margin {
  all?: Sizing;
  x?: Sizing;
  y?: Sizing;
  t?: Sizing;
  b?: Sizing;
  l?: Sizing;
  r?: Sizing;
}

type MarginKeys = keyof Margin;
type MarginEntries = Entries<Margin>;

const marginKeyMaps = {
  all: 'm',
  x: 'mx',
  y: 'my',
  t: 'mt',
  b: 'mb',
  l: 'ml',
  r: 'mr'
};

function toClassName(key: MarginKeys, size: Sizing): string {
  return `${marginKeyMaps[key]}-${toUnit(size)}`;
}

export function getMarginClassNames(margin?: Margin): string[] {
  if (!margin) return [];

  const entries = Object.entries(margin) as MarginEntries;
  return entries
    .filter((entry) => !!entry)
    .map((entry) => {
      return toClassName(entry?.[0] as MarginKeys, entry?.[1] as Sizing);
    });
}
