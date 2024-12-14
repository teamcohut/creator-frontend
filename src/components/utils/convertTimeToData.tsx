import { parse, set } from "date-fns";


function convertTimeToDate(timeInputValue: string) {
    // 1. Parse the time value
    const parsedTime = parse(timeInputValue, "HH:mm", new Date());

    // 2. Optionally, set the date to today's date
    const today = new Date();
    const fullDateTime = set(parsedTime, {
        year: today.getFullYear(),
        month: today.getMonth(),
        date: today.getDate(),
    });

    // 3. Convert to timestamp
    return fullDateTime.getTime();
}

export default convertTimeToDate;