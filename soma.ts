export function soma(n1: unknown, n2: unknown) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  }
  throw 'Mande somente número!!!';
}
