import { strict as assert } from 'node:assert';
import { EventBus } from '../dist/index.js';

const testBus = new EventBus();

testBus.on('loaded', () => {
    console.log('hello');
});

testBus.emit('loaded');
