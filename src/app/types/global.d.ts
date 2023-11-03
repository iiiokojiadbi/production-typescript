declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png?url";
declare module "*.jpg?url";
declare module "*.jpeg?url";
declare module "*.gif?url";
declare module "*.svg?url";
declare module "*.svg" {
  import React = require("react");
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const _IS_DEV_: boolean;
