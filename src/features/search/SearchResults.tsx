import type { YoutubeSearchItem } from '@services/dataTypes';
import Heading from '@ui/Heading';
import Table from '@ui/table/Table';

type Props = {
    data?: YoutubeSearchItem[];
};

const SearchResults = ({ data }: Props) => {
    const cabinMapFn = (item: YoutubeSearchItem) => (
        <Table.Row key={item.etag}>
            <div>{item.etag}</div>
        </Table.Row>
    );

    if (!data) return null;

    return (
        <div>
            <Heading as='h1'>Search Results</Heading>
            <Table $columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
                <Table.Header>
                    <div>ETAG</div>
                </Table.Header>
                <Table.Body data={data} render={cabinMapFn} />
            </Table>
        </div>
    );
};

export default SearchResults;
