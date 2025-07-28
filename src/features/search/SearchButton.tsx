import type { SearchParams } from '@services/dataTypes';
import SearchForm from './SearchForm';
import Button from '@ui/Button';
import Modal from '@ui/modal/Modal';
import { useState } from 'react';

const SearchButton = () => {
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    if (searchParams) {
        console.log(searchParams);
    }
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
        </div>
    );
};

export default SearchButton;
