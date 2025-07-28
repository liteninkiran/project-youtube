// React
import { useState } from 'react';

// UI Components
import Button from '@ui/Button';
import Modal from '@ui/modal/Modal';
import SearchForm from './SearchForm';

// Feature Components
import SearchResults from '@features/search/SearchResults';

// Types
import type { SearchParams } from '@services/dataTypes';

// Hooks
import { useSearch } from './useSearch';

const SearchButton = () => {
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const { data } = useSearch(searchParams);

    return (
        <div>
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Search</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <SearchForm setSearchParams={setSearchParams} />
                </Modal.Window>
            </Modal>
            <SearchResults data={data} />
        </div>
    );
};

export default SearchButton;
