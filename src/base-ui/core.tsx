import React, { Children, forwardRef, isValidElement, useEffect } from "react";
import MuiAvatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import Modal from "@mui/material/Modal";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MuiTooltip from "@mui/material/Tooltip";
import { ThemeProvider as MuiThemeProvider, useTheme as useMuiTheme } from "@mui/material/styles";
import fallbackTheme from "assets/theme";

const STYLE_PROPS = new Set([
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "display",
  "flexDirection",
  "justifyContent",
  "alignItems",
  "flexWrap",
  "gap",
  "rowGap",
  "columnGap",
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "overflow",
  "overflowX",
  "overflowY",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderColor",
  "borderRadius",
  "boxShadow",
  "opacity",
  "transform",
  "transition",
  "cursor",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "textAlign",
  "textTransform",
  "whiteSpace",
  "listStyle",
  "background",
  "backgroundColor",
  "bgcolor",
  "bgColor",
  "color",
  "mx",
  "my",
  "mt",
  "mb",
  "ml",
  "mr",
  "px",
  "py",
  "pt",
  "pb",
  "pl",
  "pr",
]);

const SPACING_MAP: Record<string, string> = {
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginInline",
  my: "marginBlock",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingInline",
  py: "paddingBlock",
  bgcolor: "backgroundColor",
  bgColor: "backgroundColor",
};

const toArray = (value: any) => (Array.isArray(value) ? value : [value]);

const getValue = (obj: any, path: string) =>
  path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);

const pickResponsiveValue = (value: any) => {
  if (Array.isArray(value)) {
    return [...value].reverse().find((item) => item != null);
  }

  if (value && typeof value === "object" && !isValidElement(value)) {
    return value.xl ?? value.lg ?? value.md ?? value.sm ?? value.xs ?? Object.values(value)[0];
  }

  return value;
};

const normalizeFontWeight = (value: any) => {
  if (value === "light") return 300;
  if (value === "regular") return 400;
  if (value === "medium") return 500;
  if (value === "bold") return 700;
  return value;
};

const toSpacing = (value: any) => {
  const resolved = pickResponsiveValue(value);
  return typeof resolved === "number" ? `${resolved * 8}px` : resolved;
};

const resolvePaletteValue = (theme: any, value: any) => {
  if (typeof value !== "string") return value;
  if (value === "inherit") return "inherit";
  // When MUI's cssVariables is enabled, palette tokens that flip with the
  // active color scheme live on `theme.vars.palette` as `var(--mui-palette-*)`
  // strings. Prefer those so values like "background.default" actually adapt
  // to dark mode instead of being baked to a single scheme's color.
  const palette = theme.vars?.palette ?? theme.palette;
  if (value === "white") return palette?.common?.white ?? "#fff";
  if (value === "black") return palette?.common?.black ?? "#000";
  if (value === "text") return palette?.text?.primary ?? "#1f2937";
  if (value === "secondary")
    return palette?.secondary?.main ?? palette?.text?.secondary ?? "#6b7280";
  if (value === "primary") return palette?.primary?.main ?? "#2563eb";
  if (value === "info") return palette?.info?.main ?? "#0ea5e9";
  if (value === "success") return palette?.success?.main ?? "#10b981";
  if (value === "warning") return palette?.warning?.main ?? "#f59e0b";
  if (value === "error") return palette?.error?.main ?? "#ef4444";
  if (value === "dark") return palette?.dark?.main ?? "#111827";
  if (value.includes(".")) {
    return getValue(palette, value) ?? value;
  }

  return getValue(palette, `${value}.main`) ?? value;
};

const resolveShadow = (theme: any, value: any) => {
  if (typeof value === "number")
    return theme.shadows?.[value] ?? `0 ${value}px ${value * 4}px rgba(15,23,42,0.16)`;
  if (typeof value === "string" && value.includes(".")) return getValue(theme, value) ?? value;
  return value;
};

const normalizeStyleValue = (theme: any, key: string, value: any) => {
  const resolved = pickResponsiveValue(value);

  if (
    [
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginInline",
      "marginBlock",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingInline",
      "paddingBlock",
      "gap",
      "rowGap",
      "columnGap",
    ].includes(key)
  ) {
    return toSpacing(resolved);
  }

  if (["color", "backgroundColor", "borderColor"].includes(key)) {
    return resolvePaletteValue(theme, resolved);
  }

  if (key === "boxShadow") return resolveShadow(theme, resolved);
  if (key === "borderRadius" && typeof resolved === "number") return `${resolved * 4}px`;
  if (key === "fontWeight") return normalizeFontWeight(resolved);
  if (
    [
      "width",
      "height",
      "minWidth",
      "minHeight",
      "maxWidth",
      "maxHeight",
      "top",
      "right",
      "bottom",
      "left",
    ].includes(key) &&
    typeof resolved === "number"
  ) {
    return `${resolved}px`;
  }

  return resolved;
};

const sxToStyle = (theme: any, sx: any) => {
  const collected = toArray(typeof sx === "function" ? sx(theme) : sx).filter(Boolean);

  return collected.reduce((acc, item) => {
    Object.entries(item).forEach(([key, value]) => {
      if (key.startsWith("&") || key.startsWith("@")) return;
      const cssKey = SPACING_MAP[key] ?? key;
      acc[cssKey] = normalizeStyleValue(theme, cssKey, value);
    });
    return acc;
  }, {} as React.CSSProperties);
};

const extractPropStyles = (theme: any, props: Record<string, any>) => {
  const style: React.CSSProperties = {};

  Object.entries(props).forEach(([key, value]) => {
    if (!STYLE_PROPS.has(key)) return;
    const cssKey = SPACING_MAP[key] ?? key;
    style[cssKey as keyof React.CSSProperties] = normalizeStyleValue(theme, cssKey, value) as never;
  });

  return style;
};

const stripProps = (props: Record<string, any>, extra: string[] = []) => {
  const blocked = new Set([
    "sx",
    "component",
    "container",
    "item",
    "spacing",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "exclusive",
    "orientation",
    "separator",
    "in",
    "open",
    "timeout",
    "anchorEl",
    "placement",
    "TransitionComponent",
    "fullWidth",
    "maxWidth",
    ...extra,
  ]);
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => !STYLE_PROPS.has(key) && !blocked.has(key))
  );
};

const renderPrimitive = (
  defaultTag: React.ElementType,
  props: Record<string, any>,
  ref: React.Ref<any>,
  extraStyle: React.CSSProperties = {},
  extraOmissions: string[] = []
) => {
  const theme = useTheme();
  const { component, sx, style, children, ...rest } = props;
  const Comp = component ?? defaultTag;
  const mergedStyle = {
    ...extraStyle,
    ...extractPropStyles(theme, props),
    ...sxToStyle(theme, sx),
    ...style,
  };
  return (
    <Comp ref={ref} style={mergedStyle} {...stripProps(rest, extraOmissions)}>
      {children}
    </Comp>
  );
};

const createPrimitive = (defaultTag: React.ElementType, extraStyle: React.CSSProperties = {}) =>
  forwardRef<any, any>((props, ref) => renderPrimitive(defaultTag, props, ref, extraStyle));

export const ThemeProvider = ({ theme, children }: any) => (
  <MuiThemeProvider theme={theme ?? fallbackTheme}>{children}</MuiThemeProvider>
);

export const useTheme = () => useMuiTheme() ?? fallbackTheme;

export const CssBaseline = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = theme.typography?.fontFamily ?? "Inter, sans-serif";
    document.body.style.color = theme.palette?.text?.primary ?? "#1f2937";
    document.body.style.backgroundColor = theme.palette?.background?.default ?? "#ffffff";
  }, [theme]);

  return null;
};

export const alpha = (color: string, value: number) => {
  const normalized = color.replace("#", "");
  const chunk =
    normalized.length === 3
      ? normalized.split("").map((c) => `${c}${c}`)
      : normalized.match(/.{1,2}/g);
  if (!chunk || chunk.length < 3) return color;
  const [r, g, b] = chunk.map((part) => parseInt(part, 16));
  return `rgba(${r}, ${g}, ${b}, ${value})`;
};

export const Box = createPrimitive("div");

export const Link = forwardRef<any, any>((props, ref) =>
  renderPrimitive("a", { ...props, href: props.href ?? props.to }, ref, {
    color: "inherit",
    textDecoration: "none",
  })
);

export const Button = forwardRef<any, any>(
  (
    {
      component,
      variant = "contained",
      color = "primary",
      size = "medium",
      fullWidth,
      sx,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const resolvedColor = resolvePaletteValue(theme, color);
    const textColor = variant === "text" ? resolvedColor : (theme.palette?.common?.white ?? "#fff");
    const backgroundColor = variant === "text" ? "transparent" : resolvedColor;
    const padding = size === "small" ? "8px 14px" : size === "large" ? "12px 22px" : "10px 18px";
    const mergedStyle = {
      border: "none",
      borderRadius: "999px",
      padding,
      cursor: "pointer",
      background:
        variant === "gradient"
          ? `linear-gradient(135deg, ${resolvedColor}, ${alpha(String(resolvedColor), 0.8)})`
          : backgroundColor,
      color: textColor,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      textDecoration: "none",
      width: fullWidth ? "100%" : undefined,
      ...extractPropStyles(theme, { ...rest, fullWidth: undefined }),
      ...sxToStyle(theme, sx),
      ...style,
    };

    const componentProps: Record<string, any> = component
      ? { component }
      : rest.href
        ? { component: "a" }
        : { type: rest.type ?? "button" };

    return (
      <ButtonBase
        ref={ref}
        disableRipple
        style={mergedStyle}
        {...componentProps}
        {...stripProps(rest, [
          "variant",
          "color",
          "size",
          "fullWidth",
          "to",
          "href",
          "target",
          "rel",
        ])}
        {...(rest.to ? { to: rest.to } : {})}
        {...(rest.href ? { href: rest.href } : {})}
        {...(rest.target ? { target: rest.target } : {})}
        {...(rest.rel ? { rel: rest.rel } : {})}
      >
        {children}
      </ButtonBase>
    );
  }
);

export const Card = createPrimitive("div", {
  borderRadius: "16px",
  backgroundColor: "#fff",
  overflow: "hidden",
});

export const CardMedia = forwardRef<any, any>(({ image, src, alt, ...props }, ref) =>
  renderPrimitive("img", { src: src ?? image, alt, ...props }, ref, {
    display: "block",
    width: "100%",
  })
);

export const Avatar = forwardRef<any, any>(
  ({ src, alt, children, size = "md", shadow, variant, sx, style, ...props }, ref) => {
    const theme = useTheme();
    const sizeMap: Record<string, string> = {
      sm: "40px",
      md: "56px",
      lg: "72px",
      xl: "96px",
      xxl: "120px",
    };
    const dimension = sizeMap[size] ?? (typeof size === "number" ? `${size}px` : size);
    const mergedStyle = {
      width: dimension,
      height: dimension,
      borderRadius: variant === "rounded" ? "16px" : "999px",
      objectFit: "cover",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      boxShadow: shadow ? resolveShadow(theme, `boxShadows.${shadow}`) : undefined,
      ...extractPropStyles(theme, props),
      ...sxToStyle(theme, sx),
      ...style,
    } as React.CSSProperties;

    return (
      <MuiAvatar
        ref={ref}
        src={src}
        alt={alt}
        style={mergedStyle}
        {...stripProps(props, ["size", "shadow", "variant"])}
      >
        {src ? null : (children ?? alt?.charAt(0) ?? "?")}
      </MuiAvatar>
    );
  }
);

export const IconButton = forwardRef<any, any>((props, ref) =>
  renderPrimitive("button", { type: "button", ...props }, ref, {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: "8px",
  })
);

export const Divider = forwardRef<any, any>(({ orientation = "horizontal", ...props }, ref) =>
  renderPrimitive(
    "div",
    props,
    ref,
    orientation === "vertical"
      ? { width: "1px", height: "100%", backgroundColor: "rgba(15,23,42,0.12)" }
      : { height: "1px", width: "100%", backgroundColor: "rgba(15,23,42,0.12)" },
    ["orientation"]
  )
);

export const Stack = forwardRef<any, any>(({ spacing = 0, direction = "column", ...props }, ref) =>
  renderPrimitive(
    "div",
    props,
    ref,
    { display: "flex", flexDirection: direction, gap: toSpacing(spacing) },
    ["spacing", "direction"]
  )
);

export const Grid = forwardRef<any, any>(
  (
    { container, item, spacing = 0, rowSpacing, columnSpacing, xs, sm, md, lg, xl, ...props },
    ref
  ) => {
    const span = xl ?? lg ?? md ?? sm ?? xs;
    const width = item && typeof span === "number" ? `${(span / 12) * 100}%` : undefined;
    const rowGap = rowSpacing != null ? toSpacing(rowSpacing) : undefined;
    const columnGap = columnSpacing != null ? toSpacing(columnSpacing) : undefined;

    return renderPrimitive(
      "div",
      props,
      ref,
      {
        ...(container
          ? {
              display: "flex",
              flexWrap: "wrap",
              ...(rowGap != null || columnGap != null
                ? {
                    rowGap: rowGap ?? toSpacing(spacing),
                    columnGap: columnGap ?? toSpacing(spacing),
                  }
                : { gap: toSpacing(spacing) }),
            }
          : {}),
        ...(width ? { width, flex: `0 0 ${width}` } : {}),
      },
      ["container", "item", "spacing", "rowSpacing", "columnSpacing", "xs", "sm", "md", "lg", "xl"]
    );
  }
);

export const Popper = ({ open = true, children }: any) => (open ? <>{children}</> : null);
export const Grow = ({ in: visible = true, children }: any) => (visible ? <>{children}</> : null);
export const Fade = ({ in: visible = true, children }: any) => (visible ? <>{children}</> : null);
export const Zoom = ({ in: visible = true, children }: any) => (visible ? <>{children}</> : null);
export const Collapse = ({ in: visible = true, children }: any) =>
  visible ? <>{children}</> : null;

export const Dialog = ({ open, children, ...props }: any) => {
  const theme = useTheme();
  return (
    <Modal
      open={!!open}
      onClose={() => props.onClose?.()}
      slotProps={{
        backdrop: {
          style: { backgroundColor: "rgba(15,23,42,0.48)", zIndex: 1400 },
        },
      }}
      style={{
        zIndex: 1401,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <Box
        {...props}
        sx={{
          backgroundColor: "common.white",
          borderRadius: 4,
          minWidth: "min(90vw, 640px)",
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: theme.boxShadows?.lg,
          outline: "none",
          ...(props.PaperProps?.sx || {}),
          ...(props.sx || {}),
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export const DialogTitle = createPrimitive("div", { padding: "16px 20px", fontWeight: 700 });

export const Tooltip = ({ title, children }: any) => {
  if (!title) return children;
  const trigger = isValidElement(children) ? children : <span>{children}</span>;

  return (
    <MuiTooltip
      title={title}
      slotProps={{
        tooltip: {
          style: {
            backgroundColor: "#111827",
            color: "#ffffff",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "0.75rem",
            zIndex: 1500,
          },
        },
      }}
    >
      {trigger}
    </MuiTooltip>
  );
};

export const Breadcrumbs = ({ children, separator = "/", ...props }: any) => {
  const items = Children.toArray(children);
  return (
    <Box
      {...props}
      sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1, ...(props.sx || {}) }}
    >
      {items.map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 ? <span>{separator}</span> : null}
          {child}
        </React.Fragment>
      ))}
    </Box>
  );
};

export const TextField = forwardRef<any, any>((props, ref) =>
  renderPrimitive("input", props, ref, {
    width: "100%",
    border: "1px solid rgba(15,23,42,0.16)",
    borderRadius: "12px",
    padding: "12px 14px",
  })
);

export const ToggleButtonGroup = ({
  value,
  onChange,
  exclusive,
  children,
  sx,
  style,
  ...props
}: any) => {
  const theme = useTheme();

  return (
    <MuiToggleButtonGroup
      value={value ?? (exclusive ? null : [])}
      exclusive={!!exclusive}
      onChange={(event, next) => onChange?.(event, next)}
      style={{
        display: "flex",
        ...extractPropStyles(theme, props),
        ...sxToStyle(theme, sx),
        ...style,
      }}
      {...stripProps(props, ["exclusive", "onChange"])}
    >
      {children}
    </MuiToggleButtonGroup>
  );
};

export const ToggleButton = ({ value, children, sx, style, ...props }: any) => {
  const theme = useTheme();
  const borderColor = theme.palette?.grey?.[200] ?? "#e5e7eb";
  const primary = theme.palette?.primary?.main ?? "#fb7e00";
  const white = theme.palette?.common?.white ?? "#fff";
  const textPrimary = theme.palette?.text?.primary ?? "#111827";
  const resolvedStyle = {
    borderRadius: "16px 16px 0 0",
    border: `1px solid ${borderColor}`,
    padding: "10px 16px",
    cursor: "pointer",
    backgroundColor: white,
    color: textPrimary,
    ...extractPropStyles(theme, props),
    ...sxToStyle(theme, sx),
    ...style,
  };

  return (
    <MuiToggleButton
      value={value}
      disableRipple
      style={resolvedStyle}
      sx={{
        "&.Mui-selected": {
          backgroundColor: `${primary} !important`,
          color: `${white} !important`,
        },
      }}
      {...stripProps(props)}
    >
      {children}
    </MuiToggleButton>
  );
};
