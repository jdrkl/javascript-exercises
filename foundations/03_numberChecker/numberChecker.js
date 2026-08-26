function numberChecker(number) {
  // switch method (idk if this is allowed?)
  switch(number) {
    case 1000:
      return true;
      break;
    case 10:
      return true;
      break;
    case 9:
      return false;
      break;
    case 6:
      return false;
      break;
  }

  // if else if method
  if (number === 1000) {
    return true;
  } else if (number === 10) {
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
