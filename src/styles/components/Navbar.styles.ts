export const navbar = {
    display: "flex",
    height: "1rem",
    padding: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.25rem",
    background: "#FFF",
    boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.12)",
} as const;

export const profilePicture = {
    width: "2.5rem",
    height: "2.5rem",
    flexShrink: "0",
    borderRadius: "6.25rem",
    background: "rgba(0, 0, 0, 0.10)",
} as const;
  
export const header = {
    flex: "1 0 0",
    textAlign: "left",
    color: "#000",
    fontSize: "1.75rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "2.25rem", /* 128.571% */
} as const;
  
export const links = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
} as const;

export const linksText = {
    color: "#000",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.5rem", /* 150% */
} as const;