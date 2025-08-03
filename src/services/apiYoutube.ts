import type { SearchParams, YoutubeSearchItem, YoutubeSearchResponse } from "./dataTypes";

const API_URL: string = import.meta.env.VITE_YOUTUBE_API_URL ?? '';
const API_KEY: string = import.meta.env.VITE_YOUTUBE_API_KEY ?? '';

export const search = async ({ type, q }: SearchParams): Promise<YoutubeSearchItem[]> => {
    const params = new URLSearchParams({
        part: 'snippet',
        type,
        q,
        maxResults: '50',
        key: API_KEY,
    });

    const res = await fetch(`${API_URL}/search?${params}`);

    if (!res.ok) throw new Error('Failed to fetch search results');

    const data: YoutubeSearchResponse = await res.json();

    return data.items;
};
