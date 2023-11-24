type TMods = Record<string, boolean | string | undefined>;
type TAdditional = Array<string | undefined>;

const classNames = (cls: string, additional?: TAdditional, mods?: TMods): string => {
  return [
    cls,
    ...(additional != null ? additional.filter(Boolean) : []),
    ...Object.entries(mods ?? {})
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
};

export {classNames, type TAdditional, type TMods};
