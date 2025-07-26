import {
    cloneElement,
    createContext,
    isValidElement,
    useContext,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '@hooks/useOutsideClick';
import type {
    ModalContextType,
    ModalProps,
    OpenChildren,
    OpenCloneProps,
    OpenProps,
    WindowChildren,
    WindowCloneProps,
    WindowProps,
} from './types';
import { Button, Overlay, StyledModal } from './styledComponents';

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
