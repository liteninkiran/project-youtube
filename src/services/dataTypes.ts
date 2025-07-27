export type YoutubeSearchItem = {
    kind: 'youtube#searchResult';
    etag: string;
    id: {
        kind: 'youtube#channel' | 'youtube#video' | 'youtube#playlist';
        videoId?: string;
        channelId?: string;
        playlistId?: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: { url: string };
            medium: { url: string };
            high: { url: string };
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    };
};

export type YoutubeSearchResponse = {
    kind: string;
    etag: string;
    nextPageToken?: string;
    regionCode?: string;
    pageInfo?: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: YoutubeSearchItem[];
};

export type SearchParams = {
    type: string;
    q: string;
};
