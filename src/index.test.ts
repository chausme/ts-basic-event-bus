import { EventBus } from './index';

describe('Component', () => {
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
});
