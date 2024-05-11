import { ReactElement } from "react";
import styles from "./Spacing.module.css";

type Value = string | number;
type ArrayValues = [Value?, Value?, Value?, Value?];

type SpacingMap = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export interface SpacingProps {
  /** Target element  */
  children: ReactElement;
  /** Margin (number px, string, []) */
  m?: Value | ArrayValues;
  /** Margin-top (number px, string) */
  mt?: Value;
  /** Margin-right (number px, string) */
  mr?: Value;
  /** Margin-bottom (number px, string) */
  mb?: Value;
  /** Margin-left (number px, string) */
  ml?: Value;
  /** Padding (number px, string, []) */
  p?: Value | ArrayValues;
  /** Padding-top (number px, string) */
  pt?: Value;
  /** Padding-right (number px, string) */
  pr?: Value;
  /** Padding-bottom (number px, string) */
  pb?: Value;
  /** Padding-left (number px, string) */
  pl?: Value;
}

/** Add margin and padding without creating a DOM-wrapper */
export default function Spacing(props: SpacingProps) {
  const { children, m, mt, mr, mb, ml, p, pt, pr, pb, pl } = props;

  const Element = children.type;
  const elementDataComponent = children.props["data-component"];

  const marginMap = createSpacingMap(m);
  const paddingMap = createSpacingMap(p);

  return (
    <Element
      data-component={
        elementDataComponent ? `Spacing/${elementDataComponent}` : "Spacing"
      }
      className={[
        styles.root,
        (mt !== undefined || marginMap.top) && styles._mt,
        (mr !== undefined || marginMap.right) && styles._mr,
        (mb !== undefined || marginMap.bottom) && styles._mb,
        (ml !== undefined || marginMap.left) && styles._ml,
        (pt !== undefined || paddingMap.top) && styles._pt,
        (pr !== undefined || paddingMap.right) && styles._pr,
        (pb !== undefined || paddingMap.bottom) && styles._pb,
        (pl !== undefined || paddingMap.left) && styles._pl,
      ]
        .filter((el) => el)
        .join(" ")}
      style={{
        "--mt": createValue(mt) ?? marginMap.top,
        "--mr": createValue(mr) ?? marginMap.right,
        "--mb": createValue(mb) ?? marginMap.bottom,
        "--ml": createValue(ml) ?? marginMap.left,
        "--pt": createValue(pt) ?? paddingMap.top,
        "--pr": createValue(pr) ?? paddingMap.right,
        "--pb": createValue(pb) ?? paddingMap.bottom,
        "--pl": createValue(pl) ?? paddingMap.left,
        ...children.props.style,
      }}
      {...children.props}
    />
  );
}

function createSpacingMap(spacing?: Value | ArrayValues): SpacingMap {
  if (typeof spacing === "number") {
    const value = createValue(spacing);

    return {
      top: value,
      right: value,
      bottom: value,
      left: value,
    };
  }

  if (typeof spacing === "string") {
    const value = createValue(spacing);

    return {
      top: value,
      right: value,
      bottom: value,
      left: value,
    };
  }

  if (Array.isArray(spacing)) {
    const values = spacing.map(createValue);

    if (values.length === 1) {
      return {
        top: values[0],
        right: values[0],
        bottom: values[0],
        left: values[0],
      };
    }

    if (values.length === 2) {
      return {
        top: values[0],
        right: values[1],
        bottom: values[0],
        left: values[1],
      };
    }

    if (values.length === 3) {
      return {
        top: values[0],
        right: values[1],
        bottom: values[2],
        left: values[1],
      };
    }

    if (values.length >= 4) {
      return {
        top: values[0],
        right: values[1],
        bottom: values[2],
        left: values[3],
      };
    }
  }

  return {};
}

function createValue(value?: Value): string | undefined {
  if (typeof value === "number") {
    return value === 0 ? "0" : `${value}px`;
  }

  return value;
}
