export type CallbackType = (...args: any) => any;
export declare const EventBus: {
    new (): {
        "__#1@#listeners": Record<string, CallbackType[]>;
        on(event: string, callback: CallbackType): void;
        off(event: string, callback: CallbackType): void;
        emit(event: string, ...args: any): void;
    };
};
