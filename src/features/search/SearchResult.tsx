import type { YoutubeSearchItem } from '@services/dataTypes';
import styled from 'styled-components';

type Props = {
    item: YoutubeSearchItem;
};

const Img = styled.img`
    height: 281px;
    display: inline-block;
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: 500px auto;
`;

const SearchResult = ({ item }: Props) => {
    return (
        <Div>
            <div>
                <Img src={item.snippet.thumbnails.high.url} />
            </div>
            <div>
                <div>{item.snippet.title}</div>
                <div>{item.snippet.publishTime}</div>
                <div>{item.snippet.channelTitle}</div>
                <div>{item.snippet.description}</div>
            </div>
        </Div>
    );
};

export default SearchResult;
