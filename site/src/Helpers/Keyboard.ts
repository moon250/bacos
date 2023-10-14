export function isLetter(key: string): boolean {
  return !!key.match(/^[a-zA-Z]$/gm);
}

export function isNumber(key: string): boolean {
  return !!key.match(/^[0-9]$/gm);
}

export function isUtilKey(key: string): boolean {
  return [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
  ].includes(key);
}
