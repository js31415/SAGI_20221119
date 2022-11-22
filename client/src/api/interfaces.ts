export interface IFile {
    fileName: string
    contentType: string
    data: string

}


export interface VideoPayload {
    title: string
    categoryId: string
    file: IFile
}

export interface IVideo {
    id: string
    title: string
    thumbnailUrl: string
    fileUrl: string
    category: Partial<ICategory>
}

export interface ICategory {
    id: string
    name: string;
    videos: IVideo[]
}