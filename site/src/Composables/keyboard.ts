export function useKeyboard() {
  function isLetter(key: string): boolean {
    return !!key.match(/^[a-zA-Z]$/gm);
  }

  function isNumber(key: string): boolean {
    return !!key.match(/^[0-9]$/gm);
  }

  function isUtilKey(key: string): boolean {
    return [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ].includes(key);
  }

  return { isLetter, isNumber, isUtilKey };
}
