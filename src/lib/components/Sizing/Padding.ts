import Sizing, { toUnit } from '.';
import { Entries } from '../../types/Entries';

export interface Padding {
  all?: Sizing;
  x?: Sizing;
  y?: Sizing;
  t?: Sizing;
  b?: Sizing;
  l?: Sizing;
  r?: Sizing;
}

type PaddingKeys = keyof Padding;
type PaddingEntries = Entries<Padding>;

const paddingKeysMap = {
  all: 'p',
  x: 'px',
  y: 'py',
  t: 'pt',
  b: 'pb',
  l: 'pl',
  r: 'pr'
};

function toClassName(key: PaddingKeys, size: Sizing): string {
  return `${paddingKeysMap[key]}-${toUnit(size)}`;
}

export function getPaddingClassNames(padding?: Padding): string[] {
  if (!padding) return [];

  const entries = Object.entries(padding) as PaddingEntries;
  return entries
    .filter((entry) => !!entry)
    .map((entry) => {
      return toClassName(entry?.[0] as PaddingKeys, entry?.[1] as Sizing);
    });
}
