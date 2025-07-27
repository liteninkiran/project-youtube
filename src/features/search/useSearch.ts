import { useQuery } from '@tanstack/react-query';
import { search } from '@services/apiYoutube';
import type { SearchParams } from '@services/dataTypes';

export const useSearch = (searchParams: SearchParams | null) => useQuery({
    queryKey: ['search', searchParams],
    queryFn: () => search(searchParams!),
    enabled: !!searchParams,
});
