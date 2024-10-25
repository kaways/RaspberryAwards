import React from 'react';
import { shallow } from 'enzyme';

import App from '.';

describe('Component App', () => {
  it('Teste de render do componente <App/>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
