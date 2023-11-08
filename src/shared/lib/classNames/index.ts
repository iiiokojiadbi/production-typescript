type TMods = Record<string, boolean | string | undefined>;

const classNames = (
  cls: string,
  additional?: Array<string | undefined>,
  mods?: TMods,
): string => {
  return [
    cls,
    ...(additional != null ? additional.filter(Boolean) : []),
    ...Object.entries(mods ?? {})
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
};

export {classNames};
