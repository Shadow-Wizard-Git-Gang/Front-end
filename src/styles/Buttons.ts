const button = {
    display: "flex",
    width: "10rem",
    padding: "0.75rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.5rem", /* 150% */
};

export const buttonV1 = {
    ...button,
    border: "1px solid #FFF",
};
  
export const buttonV2 = {
    ...button,
    border: "1px solid #000",
};

export const buttonV3 = {
    ...button,
    border: "1px solid #000",
    background: "#000",
    color: "#FFF",
};