import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CalendarHeader from './index';
import { configTestData } from '../../test/testData';

const props = configTestData;

describe('CalendarHeader', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalendarHeader {...props} />, div);
  });
  test('has a valid snapshot', () => {
    const component = renderer.create(
      <CalendarHeader {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
