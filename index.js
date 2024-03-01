import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

/** Style for the AppFixedCalendar component. */
const AppFixedCalendarStyle = styled.div`
  .react-calendar {
    width: auto;
    background-color: transparent;
    border: none;
  }
`;

/**
 * A fixed calendar component that wraps around the `react-calendar` library with styled-components.
 *
 * @param {Object} props - Component props.
 * @param {Date} [props.value=new Date()] - The current selected date.
 * @param {Function} [props.setValue=() => {}] - Callback function to set the new date.
 * @param {boolean} [props.isEnablePreviouseDate=true] - Flag to enable or disable dates before today.
 * @returns {React.Component} The AppFixedCalendar component.
 */
const AppFixedCalendar = ({
  value = new Date(),
  setValue = () => {},
  isEnablePreviouseDate = true,
}) => {
  return (
    <AppFixedCalendarStyle>
      <Calendar
        onChange={(date) => setValue(date)}
        value={value}
        minDate={isEnablePreviouseDate ? undefined : new Date()}
      />
    </AppFixedCalendarStyle>
  );
};

export default AppFixedCalendar;
