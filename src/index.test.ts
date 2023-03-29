import { EventBus } from './index';

describe('Event Bus', () => {
    type StateType = Record<string, string | null>;

    test('should subscribe for a provided event', () => {
        const testBus = new EventBus();
        const state: StateType = {
            status: null,
        };
        testBus.on('init', () => {
            state.status = 'init';
        });
        testBus.emit('init');
        expect(state.status).toBe('init');
    });

    test('should unsubscribe from a provided event', () => {
        const testBus = new EventBus();
        const state: StateType = {
            status: null,
        };
        const callback = () => {
            state.status = 'init';
        };
        testBus.on('init', callback);
        testBus.on('init', () => {
            state.updated = 'updated';
        });
        testBus.off('init', callback);
        testBus.emit('init');
        expect(state.status).toBe(null);
        expect(state.updated).toBe('updated');
    });

    test('should subscribe to multiple events with the same callback function', () => {
        const testBus = new EventBus();
        const state: StateType = {
            status: null,
        };
        const callback = () => {
            state.status = 'init';
        };
        testBus.on('init', callback);
        testBus.on('update', callback);
        testBus.emit('init');
        testBus.emit('update');
        expect(state.status).toBe('init');
    });

    test('should throw an error when emitting an event with no listeners', () => {
        const testBus = new EventBus();
        expect(() => {
            testBus.emit('init');
        }).toThrow('There is no event: init');
    });
});
