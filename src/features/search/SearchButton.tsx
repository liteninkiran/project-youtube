import SearchForm from './SearchForm';
import Button from '@ui/Button';
import Modal from '@ui/modal/Modal';

const SearchButton = () => {
    return (
        <div>
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Search</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <SearchForm />
                </Modal.Window>
            </Modal>
        </div>
    );
};

export default SearchButton;
