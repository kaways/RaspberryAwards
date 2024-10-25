import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Loading from './index';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

function makeWrapper() {
  return (
    <Provider store={store}>
      <Loading />
    </Provider>
  );
}

describe('Loading Component', () => {
  it('Should render', () => {
    let component;
    const wrapper = makeWrapper();
    component = mount(wrapper);

    expect(component).toBeDefined();
  });
});
