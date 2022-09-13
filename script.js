function dayOfProgrammer(year) {
  let leap = 0;
  if (year < 1700 || year > 2700) return "Out of range";
  if (year < 1918) {
    // Julian
    if (year % 4 === 0) {
      leap = -1;
    }
    return `${13 + leap}.09.${year}`;
  } else if (year > 1918) {
    // Georgian
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leap = -1;
    }
    return `${13 + leap}.09.${year}`;
  } else {
    //case for 1918
    return "26.09.1918";
  }
}
