# Basic Event Bus

[![npm](https://img.shields.io/npm/v/ts-basic-event-bus.svg?style=flat-square)](https://www.npmjs.com/package/ts-basic-event-bus)

Basic event bus TypeScript implementation

## Usage

**`eventBus.on(event: string, callback: Function)`** - subscribe the callback for an event, the event will be created if it doesn't exist

**`eventBus.off(event: string, callback: Function)`** - unsubscribe the callback and all its potential duplicates from an event, an error will be thrown if the event doesn't exist

**`eventBus.emit(event: string, ...args: any)`** - emit the event with related callbacks execution

## Example

```js
// Import EventBus
import { EventBus } from '../node_modules/ts-basic-event-bus';

// Create a new instance
const customEventBus = new EventBus();

// Subscribe to an event
const initDefaultCallback = () => {
    console.log('Heads up, init event has been fired');
};
const initCustomCallback = () => {
    console.log('Heads up, init event has been fired and some action needs to be done');
};
const renderCallback = () => {
    console.log('Heads up, render event has been fired');
};
customEventBus.on('init', initDefaultCallback);
customEventBus.on('init', initCustomCallback);
customEventBus.on('render', renderCallback);

// Unsubscribe from an event
customEventBus.off('init', initCustomCallback);

// Emit an event
customEventBus.emit('init'); // Heads up, init event has been fired

// Unsubscribe from another event
customEventBus.off('componentDidMount', renderCallback); // Error: There is no event: componentDidMount
```
