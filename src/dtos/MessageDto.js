export default class MessageDto {
    constructor({ author, avatar, text, timestamp }) {
        this.author = author
        this.avatar = avatar
        this.text = text
        this.timestamp = timestamp
    }
}

export function asDto(msg) {
    if (Array.isArray(msg))
        return msg.map(m => new MessageDto(m))
    else
        return new MessageDto(msg)
}