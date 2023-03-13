# Basic Event Bus

Basic event bus TypeScript implementation

## Features

-   Subscribe a callback for an event
-   Unsubscribe a callback from an event
-   Emit an event and execute related callbacks

## Usage

`eventBus.on(event: string, callback: Function)` - subscribes the callback for an event, creates the event if it doesn't exist

`eventBus.off(event: string, callback: Function)` - unsubscribes the callback and all its potential duplicates from an event, throws an error if the event doesn't exist

`eventBus.emit(event: string, ...args: any)` - emits the event and executes related callbacks

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
