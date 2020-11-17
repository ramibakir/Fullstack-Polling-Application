import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ViewAllPolls from '../pages/ViewAllPolls';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('returns all polls available in database', async () => {
  const fakePoll = {
    question: 'What kind of bear is best?',
    user: '5fb3f0609e554521884d1b57',
  };

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePoll),
    })
  );

  await act(async () => {
    render(<ViewAllPolls />, container);
  });

  expect(container.querySelector('h4').textContent).toBe(fakePoll.question);
  expect(container.querySelector('p').textContent).toBe(fakePoll.user.name);

  global.fetch.mockRestore();
});
