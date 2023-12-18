// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function formatTime(date, is12HourFormat) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is12HourFormat,
  };

  return new Intl.DateTimeFormat("en-IN", options).format(date);
}
//  ---------- Note ----------
// Intl.DateTimeFormat is an object in JavaScript that provides
// a way to format dates and times according to the user's locale and preferences.
// It's part of the Internationalization API (Intl) introduced in ECMAScript Internationalization API Specification.

// The Intl.DateTimeFormat object allows you to create a date and time formatter with specific options, 
// such as the date style, time style, time zone, and more. 
// It provides a consistent way to format dates and times across different locales and browsers.

function clock() {
  const currentDate = new Date();
  setInterval(function () {
    let hoursIn12HrFormat = formatTime(currentDate, true).replace(
      /am|pm/gi,
      (match) => match.toUpperCase()
    );
    let hoursIn24HrFormat = formatTime(currentDate, false);
    console.log("Current Time in 12 Hrs Format is: " + hoursIn12HrFormat);
    console.log("Current Time in 24 Hrs Format is: " + hoursIn24HrFormat);
    currentDate.setSeconds(currentDate.getSeconds() + 1);
  }, 1000);
}
