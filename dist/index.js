var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventBus_listeners;
export default class EventBus {
    constructor() {
        _EventBus_listeners.set(this, void 0);
        __classPrivateFieldSet(this, _EventBus_listeners, {}, "f");
    }
    on(event, callback) {
        if (!__classPrivateFieldGet(this, _EventBus_listeners, "f")[event]) {
            __classPrivateFieldGet(this, _EventBus_listeners, "f")[event] = [];
        }
        __classPrivateFieldGet(this, _EventBus_listeners, "f")[event].push(callback);
    }
    off(event, callback) {
        if (!__classPrivateFieldGet(this, _EventBus_listeners, "f")[event]) {
            throw new Error(`There is no event: ${event}`);
        }
        __classPrivateFieldGet(this, _EventBus_listeners, "f")[event] = __classPrivateFieldGet(this, _EventBus_listeners, "f")[event].filter(listener => listener !== callback);
    }
    emit(event, ...args) {
        if (!__classPrivateFieldGet(this, _EventBus_listeners, "f")[event]) {
            throw new Event(`There is no event: ${event}`);
        }
        __classPrivateFieldGet(this, _EventBus_listeners, "f")[event].forEach(listener => {
            listener(...args);
        });
    }
}
_EventBus_listeners = new WeakMap();
//# sourceMappingURL=index.js.map