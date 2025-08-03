import styled from 'styled-components';
import type { YoutubeSearchItem } from '@services/dataTypes';
import Heading from '@ui/Heading';
import Table from '@ui/table/Table';

type Props = {
    data?: YoutubeSearchItem[];
};

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

const SearchResults = ({ data }: Props) => {
    const captilise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    const cabinMapFn = (item: YoutubeSearchItem) => (
        <Table.Row key={item.etag}>
            <div>{captilise(item.id.kind.replace('youtube#', ''))}</div>
            <div>{item.snippet.channelTitle}</div>
            <div>{item.snippet.title}</div>
            <div>{item.snippet.description}</div>
            <Img src={item.snippet.thumbnails.default.url} />
            <div>{item.snippet.publishedAt}</div>
        </Table.Row>
    );

    if (!data) return null;

    return (
        <div>
            <Heading as='h1'>Search Results</Heading>
            <Table $columns='1fr 2fr 2fr 2fr 1fr 1fr 1fr'>
                <Table.Header>
                    <div>Type</div>
                    <div>Channel</div>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Thumbnail</div>
                    <div>Published</div>
                </Table.Header>
                <Table.Body data={data} render={cabinMapFn} />
            </Table>
        </div>
    );
};

export default SearchResults;
