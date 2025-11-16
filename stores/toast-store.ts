const useToastStore = defineStore("toasts", {
    state: (): ToastState => ({
        toasts: new Map(),
    }),
    actions: {
        addToast(toast: Toast, ttl = 7000) {
            const now = Date.now();
            this.toasts.set(now, toast);
            if (ttl === 0) return now;

            setTimeout(() => {
                this.toasts.delete(now);
            }, ttl);
            return now;
        },
        removeToast(toastID: number) {
            this.toasts.delete(toastID);
        },
    },
});

export { useToastStore };
