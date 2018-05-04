import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const CalendarHeader = ({ locale }) => {
  moment.locale(locale);
  return (
    <div
      className="calendar-header"
      style={{ display: 'flex' }}
    >
      {moment.weekdaysMin(true).map((item) => {
        return (
          <div
            key={item}
            style={{
             flexBasis: '14.2857%',
             maxWidth: '14.2857%',
             overflow: 'hidden',
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

CalendarHeader.propTypes = {
  locale: PropTypes.string,
};
CalendarHeader.defaultProps = {
  locale: 'en',
};

export default CalendarHeader;
