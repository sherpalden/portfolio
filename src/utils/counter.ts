export const CharacterCounter = (str: string) => {
  let point;
  let index;
  let width = 0;
  let len = 0;
  for (index = 0; index < str.length;) {
    point = str.codePointAt(index);
    width = 0;
    while (point) {
      width += 1;
      point = point >> 8;
    }
    index += Math.round(width / 2);
    len += 1;
  }
  return len;
};
