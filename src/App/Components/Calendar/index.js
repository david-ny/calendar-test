import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarHeader from '../CalendarHeader';
import CalendarDay from '../CalendarDay';


class Calendar extends Component {
  constructor(props) {
    super(props);
    const { locale } = this.props;
    moment.locale(locale);
  }

  render() {
    const { dateString, locale } = this.props;
    // const { dateString } = this.props;
    const validatedDateString = !moment(dateString).isValid()
      ? moment().format('YYYY-MM-DD')
      : dateString;

    moment.locale(locale);
    const numberOfDaysInPrevMonth = moment(validatedDateString).subtract(1, 'months').daysInMonth();
    const numberOfDaysInMonth = moment(validatedDateString).daysInMonth();
    const numberOfDaysInNextMonth = moment(validatedDateString).add(1, 'months').daysInMonth();
    const firstDayInMonth = moment(`${validatedDateString.slice(0, 7)}-01`).weekday();
    const prevMonthArr = Array.from(Array(numberOfDaysInPrevMonth + 1).keys())
      .slice(1, numberOfDaysInPrevMonth + 1)
      .slice(
        (numberOfDaysInPrevMonth + 1) - (firstDayInMonth + 1),
        numberOfDaysInPrevMonth,
      );
    const currMonthArr = Array.from(Array(numberOfDaysInMonth + 1).keys())
      .slice(1, numberOfDaysInMonth + 1);
    const nextMonthArr = Array.from(Array(numberOfDaysInNextMonth + 1).keys())
      .slice(1, numberOfDaysInNextMonth + 1)
      .slice(
        0,
        (42 - (prevMonthArr.length + numberOfDaysInMonth)),
      );

    const prevMonthDaysArr = prevMonthArr.map(item =>
      (<CalendarDay
        key={`0${item}-prev`}
        dayNum={item}
        dateString={validatedDateString}
        locale={locale}
        prev
      />));
    const currMonthDaysArr = currMonthArr.map(item =>
      (<CalendarDay
        key={`0${item}`}
        dayNum={item}
        dateString={validatedDateString}
        locale={locale}
      />));
    const nextMonthDaysArr = nextMonthArr.map(item =>
      (<CalendarDay
        key={`0${item}-next`}
        dayNum={item}
        dateString={validatedDateString}
        locale={locale}
        next
      />));

    const calendarDays = [
      ...prevMonthDaysArr,
      ...currMonthDaysArr,
      ...nextMonthDaysArr,
    ];

    return (
      <div className="calendar">
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
         }}
        >
          <div style={{ flexGgrow: '1', width: '100%' }}>
            <CalendarHeader locale={locale} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {calendarDays.map(item => item)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  dateString: PropTypes.string,
  locale: PropTypes.string,
};
Calendar.defaultProps = {
  dateString: moment().format('YYYY-MM-DD'),
  locale: 'en',
};

export default Calendar;
