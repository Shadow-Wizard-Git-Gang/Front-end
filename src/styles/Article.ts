export const article = {
    display: "flex",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "1rem",
    flex: "1 0 0",
    borderRadius: "0.375rem",
    border: "1px solid rgba(0, 0, 0, 0.10)",
};

export const image = {
    flex: "1 0 0",
    alignSelf: "stretch",
    background: "rgba(217, 217, 217, 0.50)",
};

export const container = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    gap: "0.5rem",
    flex: "1 0 0",
};

export const tag = {
    display: "flex",
    width: "2.5rem",
    height: "1.25rem",
    padding: "0.125rem 0.25rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.125rem",
    borderRadius: "0.125rem",
    border: "0.5px solid rgba(0, 0, 0, 0.10)",
    background: "rgba(217, 217, 217, 0.50)",
    color: "#000",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1rem", /* 133.333% */
};

export const avatar = {
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "1.25rem",
    background: "rgba(0, 0, 0, 0.10)",
};

export const tagContainer = {
    display: "flex",
    padding: "0.25rem 0rem",
    alignItems: "center",
    gap: "0.375rem",
    alignSelf: "stretch",
};

export const userContainer = {
    display: "flex",
    padding: "0.25rem 0rem",
    alignItems: "center",
    gap: "0.5rem",
    alignSelf: "stretch",
    justifyContent: "space-around",
};

export const header = {
    color: "#000",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.75rem", /* 140% */
    margin: "0",
};

export const subtitle = {
    color: "rgba(0, 0, 0, 0.50)",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25rem", /* 142.857% */
    margin: "0",
};

export const text = {
    color: "#000",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.5rem", /* 150% */
    margin: "0",
};

export const username = {
    flex: "1 0 0",
    textAlign: "left" as const,
    overflow: "hidden",
    color: "#000",
    textOverflow: "ellipsis",
    whitespace: "nowrap",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.25rem", /* 142.857% */
    margin: "0",
};