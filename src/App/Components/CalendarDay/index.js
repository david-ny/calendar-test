import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import business from 'moment-business';

const CalendarDay = ({
  dayNum,
  dateString,
  locale,
  prev,
  next,
}) => {
  moment.locale(locale);
  const day = (`0${dayNum}`).slice(-2);
  let monthFromString = parseInt(dateString.slice(5, 7), 10);
  monthFromString = prev ? monthFromString - 1 : monthFromString;
  monthFromString = next ? monthFromString + 1 : monthFromString;
  const month = (`0${monthFromString}`).slice(-2);
  const currentDateString =
    `${dateString.slice(0, 4)}-${month}-${day}`;
  const isWeekDay = business.isWeekDay(moment(currentDateString));
  const color = isWeekDay ? 'gray' : 'red';
  const opacity = (prev || next) ? 0.3 : 1;
  const today = currentDateString === dateString ? 'today' : '';
  return (
    <button
      className={today}
      style={{
         flexBasis: '14.2857%',
         maxWidth: '14.2857%',
         overflow: 'hidden',
         color,
       }}
      type="button"
    >
      <time
        style={{
           opacity,
         }}
        dateTime={moment(currentDateString).format('YYYY-MM-DD HH:MM')}
      >
        {dayNum}
      </time>
    </button>
  );
};

CalendarDay.propTypes = {
  dayNum: PropTypes.number.isRequired,
  dateString: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  prev: PropTypes.bool,
  next: PropTypes.bool,
};
CalendarDay.defaultProps = {
  prev: false,
  next: false,
};

export default CalendarDay;
