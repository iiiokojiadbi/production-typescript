type TMods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: string[],
  mods: TMods = {}
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
}
