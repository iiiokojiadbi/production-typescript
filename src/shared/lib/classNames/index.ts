type TMods = Record<string, boolean | string>

function classNames (
  cls: string,
  additional: [string | undefined],
  mods: TMods = {}
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(' ');
}

export { classNames };
