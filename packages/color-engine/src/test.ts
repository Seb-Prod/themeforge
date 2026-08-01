import {
  convertToOklch,
  convertToHex
} from "./color";


const color = "#a865cc";


const oklch = convertToOklch(color);

console.log(oklch);


console.log(
  convertToHex(oklch)
);