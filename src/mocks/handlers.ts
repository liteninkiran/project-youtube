import { http, HttpResponse } from 'msw'
import { search } from './search';

const API_URL: string = import.meta.env.VITE_YOUTUBE_API_URL ?? '';

export const handlers = [
    http.get(`${API_URL}/search`, () => HttpResponse.json(search)),
];
