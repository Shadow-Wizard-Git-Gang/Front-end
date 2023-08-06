export interface blockProps {
    imageURL?: string,
    tags?: string[],
    user?: {
        avatarURL: string,
        username: string,
    },
    data: {
        header?: string,
        subtitle?: string,
        text?: string,
    }
}