const assert = require('node:assert/strict');
const test = require('node:test');

const { greet } = require('./hello');

test('greets the provided name', () => {
  assert.equal(greet('Codex'), 'Merhaba, Codex!');
});
