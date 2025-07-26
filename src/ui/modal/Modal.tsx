import {
    cloneElement,
    createContext,
    isValidElement,
    useContext,
    useState,
    type ReactNode,
    type ReactElement,
} from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import styled from 'styled-components';
import { useOutsideClick } from '@hooks/useOutsideClick';

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /*
        fill: var(--color-grey-500);
        stroke: var(--color-grey-500);
        */
        color: var(--color-grey-500);
    }
`;

const initialContext = {
    openName: '',
    open: () => {},
    close: () => {},
};

const ModalContext = createContext<ModalContextType>(initialContext);

const Modal = ({ children }: ModalProps) => {
    const [openName, setOpenName] = useState('');

    const close = () => setOpenName('');
    const open = setOpenName;

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
};

const Open = (props: OpenProps) => {
    const { children, opens } = props;
    const { open } = useContext(ModalContext);

    if (!isValidElement(children)) {
        console.error(
            '<Modal.Open> expects a single valid React element as a child.'
        );
        return null;
    }

    const cloneProps: OpenCloneProps = {
        onClick: () => open(opens),
    };

    return cloneElement(children as OpenChildren, cloneProps);
};

const Window = (props: WindowProps) => {
    const { children, name } = props;
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick<HTMLDivElement>(close);

    if (name !== openName) return null;

    if (!isValidElement(children)) {
        console.error(
            '<Modal.Open> expects a single valid React element as a child.'
        );
        return null;
    }

    const cloneProps: WindowCloneProps = {
        onCloseModal: close,
    };

    const modal = (
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={close}>
                    <HiXMark />
                </Button>

                <div>
                    {cloneElement(children as WindowChildren, cloneProps)}
                </div>
            </StyledModal>
        </Overlay>
    );

    return createPortal(modal, document.body);
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

type ModalProps = {
    children: ReactNode;
};

type OpenProps = {
    children: OpenChildren;
    opens: string;
};

type OpenCloneProps = {
    onClick: () => void;
};

type WindowProps = {
    children: ReactNode;
    name: string;
};

type WindowCloneProps = {
    onCloseModal: () => void;
};

type ModalContextType = {
    openName: string;
    open: (opens: string) => void;
    close: () => void;
};

type OpenChildren = ReactElement<React.HTMLAttributes<HTMLElement>>;
type WindowChildren = ReactElement<{ onCloseModal?: () => void }>;
