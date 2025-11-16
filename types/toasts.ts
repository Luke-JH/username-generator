type Toast = {
    text: string;
    icon: [string, string];
};

type ToastState = {
    toasts: Map<number, Toast>;
};

export type { Toast, ToastState };
