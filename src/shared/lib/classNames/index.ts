type TMods = Record<string, boolean | string>;

function classNames(
  cls: string,
  additional: string[] = [],
  mods: TMods = {}
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
}

export { classNames };
