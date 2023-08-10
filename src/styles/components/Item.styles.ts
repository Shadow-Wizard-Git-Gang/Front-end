export const Item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1 0 0',
    borderRadius: '0.375rem',
    border: '1px solid rgba(0, 0, 0, 0.10)',
    color: '#000',
} as const;

export const ItemLabel = {
    display: 'inline-flex',
    padding: '0.25rem 0.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.375rem 0rem',
    background: 'rgba(0, 0, 0, 0.05)',
    position: 'absolute',
    zIndex: 1,
} as const;

export const ItemImage = {
    alignSelf: 'stretch',
    width: '100%',
    background: 'rgba(217, 217, 217, 0.50)',
    borderTopLeftRadius: '0.375rem',
    borderTopRightRadius: '0.375rem',
} as const;

export const ItemImagePlaceholder = {
    ...ItemImage,
    margin: "0",
    textAlign: 'center',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
} as const;

export const ItemImageContainer = {
    display: 'flex',
    height: '21.25rem',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
} as const;

export const ItemTextContainer = {
    display: 'flex',
    padding: '0.75rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.25rem',
    alignSelf: 'stretch',
    background: '#FFF',
    borderBottomLeftRadius: '0.375rem',
    borderBottomRightRadius: '0.375rem',
} as const;

export const ItemTextTitle = {
    color: '#000',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: "1.5rem", /* 150% */
} as const;

export const ItemTextData = {
    color: '#000',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: "1.75rem", /* 140% */
} as const;

