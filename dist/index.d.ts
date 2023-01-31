export type CallbackType = (...args: any) => any;
export default class EventBus {
    #private;
    constructor();
    on(event: string, callback: CallbackType): void;
    off(event: string, callback: CallbackType): void;
    emit(event: string, ...args: any): void;
}
