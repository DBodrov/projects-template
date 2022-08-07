import React from 'react';
import {render, waitForElementToBeRemoved, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {App} from '../App';
import {AppProviders} from 'context';

const waitForLoadingFinish = () =>
  waitForElementToBeRemoved(() => screen.queryByText(/Загрузка/i), {timeout: 15000});

  const waitForAnketaLoadingFinish = () =>
  waitForElementToBeRemoved(() => screen.queryByText(/Обновляем анкету/i), {timeout: 15000});

const renderApp = () =>
  render(
    <AppProviders>
      <App />
    </AppProviders>,
  );

export * from '@testing-library/react';

export {renderApp, userEvent, waitForLoadingFinish, waitForAnketaLoadingFinish};
