export type YoutubeSearchItem = {
    kind: 'youtube#searchResult';
    etag: string;
    id: Id;
    snippet: Snippet;
};

export type YoutubeSearchResponse = {
    kind: string;
    etag: string;
    nextPageToken?: string;
    regionCode?: string;
    pageInfo?: PageInfo;
    items: YoutubeSearchItem[];
};

export type SearchParams = {
    type: string;
    q: string;
};

type PageInfo = {
    totalResults: number;
    resultsPerPage: number;
}

type Thumbnails = {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
}

type Snippet = {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

type Id = {
    kind: IdKind;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
}

type IdKind = 'youtube#channel' | 'youtube#video' | 'youtube#playlist';
