declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
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
