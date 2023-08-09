export const input = {
    display: "flex",
    padding: "0.5rem 0.75rem",
    alignItems: "center",
    gap: "0.25rem",
    alignSelf: "stretch",
    borderRadius: "0.375rem",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    background: "#FFF",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whitespace: "nowrap",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25rem", /* 142.857% */
} as const;

export const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "0.25rem",
    alignSelf: "stretch",
} as const;

export const label = {
    color: "#000",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.25rem", /* 142.857% */
    margin: "0",
} as const;