import React, { Component } from 'react';
import browserLocale from 'browser-locale';
import Calendar from './Components/Calendar';
import { LOCALES } from './Config/constants';

class App extends Component {
  static getISODateString(dateObj) {
    const month = `0${dateObj.getMonth() + 1}`.slice(-2);
    const day = `0${dateObj.getDate()}`.slice(-2);
    return `${dateObj.getFullYear()}-${month}-${day}`;
  }

  constructor(props) {
    super(props);
    this.state = {
      dateString: App.getISODateString(new Date()),
      locale: browserLocale(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const {
      dateString,
      locale,
    } = this.state;

    return (
      <div>
        <div className="controls">
          <select id="locale" value={locale} onChange={event => this.handleChange(event)}>
            {
              Object.entries(LOCALES)
              .map(item => (
                <option
                  key={item}
                  value={item[0]}
                >
                  {item[1]}
                </option>))
            }
          </select>
          <input
            id="dateString"
            type="date"
            required
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            value={dateString}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <Calendar
          dateString={dateString}
          locale={locale}
        />
      </div>
    );
  }
}

export default App;
