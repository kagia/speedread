import { configure } from '@storybook/react';
// automatically import all files ending in *.tsx
const req = require.context('../src/stories', true, /.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);