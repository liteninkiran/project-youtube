import styled from 'styled-components';

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const StyledSelect = styled.select`
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    background-color: white;
    color: var(--color-grey-900);
    appearance: none;

    &:focus {
        outline: none;
        border-color: var(--color-blue-500);
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
    }
`;

const StyledOption = styled.option``;

type Option = {
    label: string;
    value: string;
};

type RestProps = React.SelectHTMLAttributes<HTMLSelectElement>;

type Props = {
    value: string;
    options: Option[];
} & RestProps;

const FormSelect: React.FC<Props> = ({ value, options, ...rest }) => {
    const mapFn = (opt: Option) => (
        <StyledOption key={opt.value} value={opt.value}>
            {opt.label}
        </StyledOption>
    );
    return (
        <SelectWrapper>
            <StyledSelect value={value} {...rest}>
                {options.map(mapFn)}
            </StyledSelect>
        </SelectWrapper>
    );
};

export default FormSelect;
