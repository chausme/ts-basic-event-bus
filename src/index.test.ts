import { EventBus } from './index';

describe('Component', () => {
    test('should subscribe for a provided event', () => {
        const testBus = new EventBus();
        const state: Record<string, string | null> = {
            status: null,
        };
        testBus.on('init', () => {
            state.status = 'init';
        });
        testBus.emit('init');
        expect(state.status).toBe('init');
    });
});
