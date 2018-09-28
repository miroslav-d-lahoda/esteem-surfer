/* eslint-disable */
import accounts from './accounts';
import {setItem, removeItem} from '../helpers/storage';

import {
  ACCOUNT_ADDED,
  ACCOUNT_DELETED,
  ACCOUNT_ACTIVATED,
  ACTIVE_ACCOUNT_DATA_UPDATED
} from '../actions/accounts';

import deepFreeze from 'deep-freeze';

describe('accounts reducer', () => {
  let state = undefined;

  it('(1) default state', () => {
    state = accounts(state, {});

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(2) account "foo" added ', () => {
    const username = 'foo';

    setItem(`account_${username}`, {username});
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(3) account "bar" added ', () => {
    const username = 'bar';

    setItem(`account_${username}`, {username});
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(4) account "baz" added', () => {
    const username = 'baz';

    setItem(`account_${username}`, {username});
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(5) account "baz" deleted', () => {
    const username = 'baz';

    removeItem(`account_${username}`);
    setItem(`active_account`, null);

    const action = {
      type: ACCOUNT_DELETED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(6) account "foo" activated', () => {
    const username = 'foo';

    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ACTIVATED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(7) account "foo" deleted', () => {
    const username = 'foo';

    removeItem(`account_${username}`);
    setItem(`active_account`, null);

    const action = {
      type: ACCOUNT_DELETED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(8) account "bar" activated', () => {
    const username = 'bar';

    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ACTIVATED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(9) active account data updated', () => {
    const action = {
      type: ACTIVE_ACCOUNT_DATA_UPDATED,
      payload: {accountData: {id: 13124, username: "bar"}}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });

  it('(10) account "bar" added ', () => {
    const username = 'bar';

    setItem(`account_${username}`, {username});
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: {username}
    };

    deepFreeze(state);

    state = accounts(state, action);

    expect(state).toMatchSnapshot();
  });
});
