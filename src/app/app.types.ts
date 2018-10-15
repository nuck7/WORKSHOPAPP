export interface VideoDetailsArray {
    age: number;
    region: string;
    date: string;
}

export interface Video {
    title: string;
    id: string;
    author: string;
    viewDetails: VideoDetailsArray;
}

