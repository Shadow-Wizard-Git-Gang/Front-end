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
    cursor: "pointer",
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

export const buttonV4 = {
    display: 'flex',
    padding: '0.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 0 0',
    borderRadius: '0.375rem',
    background: 'rgba(0, 0, 0, 0.05)',
};

export const buttonV5 = {
    display: 'flex',
    width: '7.5rem',
    padding: '0.5rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    borderRadius: '0.375rem',
    background: 'rgba(217, 217, 217, 0.50)',
};

