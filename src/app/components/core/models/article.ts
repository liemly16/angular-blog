
export class Article {
    id: string
    title: string
    content: string
    thumb: string

    constructor(id, title, content, thumb = "http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png") {
        this.id = id;
        this.title = title;
        this.content = content;
        this.thumb = thumb;
    }
}
