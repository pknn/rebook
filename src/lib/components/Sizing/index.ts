type Sizing = '3s' | '2s' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | 'none';

export function toUnit(sizing: Sizing): number {
  switch (sizing) {
    case '3s':
      return 1;
    case '2s':
      return 2;
    case 's':
      return 4;
    case 'm':
      return 6;
    case 'l':
      return 8;
    case 'xl':
      return 10;
    case '2xl':
      return 12;
    case '3xl':
      return 14;
    case 'none':
    default:
      return 0;
  }
}

export default Sizing;
