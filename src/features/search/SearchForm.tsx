// React
import { useForm } from 'react-hook-form';

// Form Components
import Button from '@ui/Button';
import Form from '@ui/form/Form';
import FormInput from '@ui/form/FormInput';
import FormRow from '@ui/form/FormRow';
import FormSelect from '@ui/form/FormSelect';

// Types
import type { SearchParams } from '@services/dataTypes';

const options = [
    { label: 'Video', value: 'video' },
    { label: 'Channel', value: 'channel' },
    { label: 'Playlist', value: 'playlist' },
];

const defaultValues: SearchParams = {
    q: '',
    type: 'video',
};

const SearchForm = ({ onCloseModal }: Props) => {
    const { handleSubmit, register, watch, formState } = useForm<SearchParams>({
        defaultValues,
    });

    const onFormSubmit = (data: SearchParams) => {
        console.log(data);
        onCloseModal?.();
    };

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)} type={'modal'}>
            <FormRow label='Search Term' error={formState.errors?.q?.message}>
                <FormInput
                    placeholder='Enter a search term'
                    type='text'
                    id='q'
                    {...register('q', required)}
                />
            </FormRow>

            <FormRow label='Type'>
                <FormSelect
                    value={watch('type')}
                    options={options}
                    {...register('type', required)}
                />
            </FormRow>

            <FormRow>
                <>
                    <Button
                        $variation='secondary'
                        type='reset'
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>
                    <Button>Search</Button>
                </>
            </FormRow>
        </Form>
    );
};

export default SearchForm;

const required = {
    required: 'This field is required',
};

type Props = {
    onCloseModal?: () => void;
};
