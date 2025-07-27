import Button from '@ui/Button';
import Form from '@ui/form/Form';
import FormInput from '@ui/form/FormInput';
import FormRow from '@ui/form/FormRow';
import FormSelect from '@ui/form/FormSelect';
import { useForm } from 'react-hook-form';
import { useSearch } from './useSearch';
import type { SearchParams } from '@services/dataTypes';
import { useState } from 'react';

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

    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const { isLoading, data } = useSearch(searchParams);

    if (data) {
        console.log(data);
    }

    const onFormSubmit = (data: SearchParams) => {
        setSearchParams({
            q: data.q,
            type: data.type,
        });
    };

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)} type={'modal'}>
            <FormRow label='Search Term' error={formState.errors?.q?.message}>
                <FormInput
                    placeholder='Enter a search term'
                    type='text'
                    id='q'
                    disabled={isLoading}
                    {...register('q', required)}
                />
            </FormRow>

            <FormRow label='Type'>
                <FormSelect
                    value={watch('type')}
                    options={options}
                    disabled={isLoading}
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
                    <Button disabled={isLoading}>Search</Button>
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
