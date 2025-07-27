import { search } from '@services/apiYoutube';
import type { SearchParams } from '@services/dataTypes';
import { useQuery } from '@tanstack/react-query';

export const useSearch = (searchParams: SearchParams | null) => {
    return useQuery({
        queryKey: ['search', searchParams],
        queryFn: () => search(searchParams!),
        enabled: !!searchParams,
    });
};
