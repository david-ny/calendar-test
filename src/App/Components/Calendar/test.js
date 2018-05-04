import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Calendar from './index';
import { configTestData } from '../../test/testData';

const props = configTestData;

describe('Calendar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calendar {...props} />, div);
  });
  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Calendar {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
