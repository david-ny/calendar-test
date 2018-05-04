import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CalendarDay from './index';
import { CalendarDayTestData } from '../../test/testData';

const props = CalendarDayTestData;

describe('CalendarDay', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalendarDay {...props} />, div);
  });
  test('has a valid snapshot', () => {
    const component = renderer.create(
      <CalendarDay {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
