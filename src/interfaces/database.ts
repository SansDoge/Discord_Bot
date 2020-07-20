export interface server {
    _id: string,
    server: string,
    channelGeneral: string,
    channelMemes: string,
    channelLogging: string,
    posts: Array<string>
}

export interface event {
    _id?: string,
    title: string,
    time: Date,
    attendees: Array<string>
}

interface date {
    
}