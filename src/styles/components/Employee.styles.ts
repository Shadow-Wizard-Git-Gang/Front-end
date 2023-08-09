export const employeeContainer = {
    display: 'flex',
    padding: '1rem 0rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    alignSelf: 'stretch',
    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
} as const;

export const image = {
    display: 'flex',
    width: '3.75rem',
    height: '3.75rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    alignSelf: 'stretch',
    borderRadius: '1rem',
    background: 'rgba(217, 217, 217, 0.50)',
} as const;

export const header = {
    color: '#000',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.75rem',
} as const;

export const subtitle = {
    color: 'rgba(0, 0, 0, 0.50)',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.5rem',
} as const;

export const id = {
    color: '#000',
    textAlign: 'right',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.75rem',
} as const;