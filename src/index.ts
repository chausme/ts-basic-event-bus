export type EventCallback<T = any, R = void> = (...args: T[]) => R;

export const EventBus = class EventBus {
    #listeners: Record<string, EventCallback[]>;

    constructor() {
        this.#listeners = {};
    }

    /**
     * Registers a callback function to be executed when the specified event is emitted.
     * @param event The name of the event to register the callback for.
     * @param callback The function to be executed when the event is emitted.
     */
    on(event: string, callback: EventCallback) {
        if (!this.#listeners[event]) {
            this.#listeners[event] = [];
        }

        this.#listeners[event].push(callback);
    }

    /**
     * Unregisters a previously registered callback function from the specified event.
     * @param event The name of the event to unregister the callback from.
     * @param callback The function to be unregistered.
     */
    off(event: string, callback: EventCallback) {
        if (!this.#listeners[event]) {
            throw new Error(`There is no event: ${event}`);
        }

        this.#listeners[event] = this.#listeners[event].filter(listener => listener !== callback);
    }

    /**
     * Dispatches an event with the specified name and passes any additional arguments to the registered listeners.
     * @param event The name of the event to dispatch.
     * @param args Additional arguments to pass to the event listeners.
     */
    emit(event: string, ...args: any) {
        if (!this.#listeners[event]) {
            throw new Error(`There is no event: ${event}`);
        }

        this.#listeners[event].forEach(listener => {
            listener(...args);
        });
    }
};
