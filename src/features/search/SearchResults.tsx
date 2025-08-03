import type { YoutubeSearchItem } from '@services/dataTypes';
import SearchResult from './SearchResult';

type Props = {
    data?: YoutubeSearchItem[];
};

const SearchResults = ({ data }: Props) => {
    const resultMapFn = (item: YoutubeSearchItem) => (
        <SearchResult item={item} key={item.etag} />
    );

    if (!data) return null;

    return <div>{data.map(resultMapFn)}</div>;
};

export default SearchResults;
