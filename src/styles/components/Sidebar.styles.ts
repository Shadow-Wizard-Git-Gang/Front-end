export const sidebar = {
    display: 'flex',
    width: '13.75rem',
    height: '66.5rem',
    padding: '0.75rem 0rem',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
} as const;

export const Links = {
    display: 'flex',
    padding: '1rem 1.25rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.75rem',
    alignSelf: 'stretch',
} as const;

export const LinksIcon = {
    display: 'flex',
    width: '1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: '#000',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whitespace: 'nowrap',
    fontSize: '0.9375rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: "1.5rem", /* 160% */
    borderRadius: '1rem',
    background: 'rgba(217, 217, 217, 0.50)',
} as const;

export const LinksText = {
    flex: '1 0 0',
    color: '#000',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: "1.25rem", /* 125% */
} as const;