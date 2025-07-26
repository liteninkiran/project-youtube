import {
    type ReactNode,
    type ReactElement,
} from 'react';

export type ModalProps = {
    children: ReactNode;
};

export type OpenProps = {
    children: OpenChildren;
    opens: string;
};

export type OpenCloneProps = {
    onClick: () => void;
};

export type WindowProps = {
    children: ReactNode;
    name: string;
};

export type WindowCloneProps = {
    onCloseModal: () => void;
};

export type ModalContextType = {
    openName: string;
    open: (opens: string) => void;
    close: () => void;
};

export type OpenChildren = ReactElement<React.HTMLAttributes<HTMLElement>>;
export type WindowChildren = ReactElement<{ onCloseModal?: () => void }>;
