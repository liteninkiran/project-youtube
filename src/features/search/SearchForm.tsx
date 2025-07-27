import Button from '@ui/Button';
import Form from '@ui/form/Form';
import FormInput from '@ui/form/FormInput';
import FormRow from '@ui/form/FormRow';
import { useForm } from 'react-hook-form';

const SearchForm = ({ onCloseModal }: Props) => {
    const { handleSubmit, register } = useForm<FormValues>({
        defaultValues: {},
    });

    const onFormSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)} type={'modal'}>
            <FormRow label='Name'>
                <FormInput
                    placeholder='Name'
                    type='text'
                    id='name'
                    {...register('name', required)}
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

type FormValues = {
    name: string;
};

type Props = {
    onCloseModal?: () => void;
};
