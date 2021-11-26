import React from "react";
interface hour {
  format: string;
  caption: string;
  step?: number;
}
// interface minute {
//   [key: string]: any;
// }

interface minute {
  format: string;
  caption: string;
  step?: number;
}
export interface TimeProps {
  ["hour"]: hour;
  ["minute"]: minute;
}
