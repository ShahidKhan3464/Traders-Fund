import { jwtDecode } from 'jwt-decode';
import moment from 'moment/moment';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import blueBadge from '../images/affiliate/verified-blue.svg';
import silverBadge from '../images/affiliate/verified-silver.svg';
import greenBadge from '../images/affiliate/verified-green.svg'

export function showError(setNotification) {
  setNotification({ message: 'Error!', type: 'error' });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showSuccess(setNotification) {
  setNotification({ message: 'Success!', type: 'success' });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showSupportEmailSentSuccess(setNotification) {
  setNotification({
    message: 'Success! Your Message Was Sent.',
    type: 'success'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showDiscountCodeSuccessful(setNotification) {
  setNotification({
    message: 'Discount Code Applied!',
    type: 'success'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}
export function showDiscountAdditionalAccountSuccessful(setNotification, noOfAccounts) {
  setNotification({
      message: `You are about to get ${noOfAccounts > 1 ? `${noOfAccounts} additional trading accounts` : 'an additional trading account'} for free after successful payment!`,
    type: 'success'
  });
  setTimeout(() => setNotification(null), 10000); // auto-hide after 3 seconds
}

export function showPasswordChangeSuccess(setNotification) {
  setNotification({
    message: 'Password Successfully Changed!',
    type: 'success'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showLoginError(setNotification) {
  setNotification({ message: 'Invalid Credentials!', type: 'error' });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showCustomError(setNotification, errorMessage) {
  setNotification({ message: errorMessage, type: 'error' });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showCustomSuccess(setNotification, errorMessage, time) {
  setNotification({ message: errorMessage, type: 'success' });
  setTimeout(() => setNotification(null), time ?? 3000); // auto-hide after 3 seconds
}

export function showPasswordMismatchError(setNotification) {
  setNotification({ message: 'Passwords do not match!', type: 'error' });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showMissingFieldsError(setNotification) {
  setNotification({
    message: 'Error! Fill out all required fields',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showInvalidEmailError(setNotification) {
  setNotification({
    message: 'Invalid Email Address!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showInvalidPhoneNumberError(setNotification) {
  setNotification({
    message: 'Invalid Phone Number!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showInvalidCardNumberError(setNotification) {
  setNotification({
    message: 'Invalid Card Number!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showInvalidExpiryDateError(setNotification) {
  setNotification({
    message: 'Invalid Expiry Date!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showInvalidCVVError(setNotification) {
  setNotification({
    message: 'Invalid CVV!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showInvalidPaymentInputsError(setNotification) {
  setNotification({
    message: 'Invalid Payment Inputs.',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showPaymentDeclinedError(setNotification) {
  setNotification({
    message: 'Payment Declined. Check if your funds are sufficient or contact your bank.',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showWeakPasswordError(setNotification) {
  setNotification({
    message: 'Password should be at least 8 characters, contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special symbol.',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showDiscountCodeNotFoundError(setNotification) {
  setNotification({
    message: 'Discount Code Not Found!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function showDiscountUsedTooMuch(setNotification) {
  setNotification({
    message: 'Max Uses For This Code Exceeded!',
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function checkToken(token) {
  const decoded = jwtDecode(token);
  if (!decoded) return;
  return decoded.sub;
}

export function showM2PayOrderError(setNotification, message) {
  setNotification({
    message,
    type: 'error'
  });
  setTimeout(() => setNotification(null), 3000); // auto-hide after 3 seconds
}

export function getDateUpdatedAtString(date) {
  const now = moment(new Date());
  const end = moment(date);
  const duration = moment.duration(now.diff(end));
  const years = Math.round(duration.asYears());
  const months = Math.round(duration.asMonths());
  const weeks = Math.round(duration.asWeeks());
  const days = Math.round(duration.asDays());
  const hours = Math.round(duration.asHours());
  const minutes = Math.round(duration.asMinutes());
  const seconds = Math.round(duration.asSeconds());
  if (years >= 1) {
    if (years === 1) {
      return 'A year ago';
    } else {
      return `${years} years ago`;
    }
  } else if (months >= 1) {
    if (months === 1) {
      return 'A month ago';
    } else {
      return `${months} months ago`;
    }
  } else if (weeks >= 1) {
    if (weeks === 1) {
      return 'A week ago';
    } else {
      return `${weeks} weeks ago`;
    }
  } else if (days >= 1) {
    if (days === 1) {
      return 'A day ago';
    } else {
      return `${days} days ago`;
    }
  } else if (hours >= 1) {
    if (hours === 1) {
      return 'An hour ago';
    } else {
      return `${hours} hours ago`;
    }
  } else if (minutes >= 1) {
    if (minutes === 1) {
      return 'A minute ago';
    } else {
      return `${minutes} minutes ago`;
    }
  } else {
    if (seconds === 1) {
      return 'A second ago';
    } else {
      return `${seconds} seconds ago`;
    }
  }
}

export function getDuration(date) {
  const now = moment(new Date());
  const end = moment(date);
  const duration = moment.duration(now.diff(end));
  const years = Math.abs(Math.round(duration.asYears()));
  const months = Math.abs(Math.round(duration.asMonths()));
  const weeks = Math.abs(Math.round(duration.asWeeks()));
  const days = Math.abs(Math.round(duration.asDays()));
  const hours = Math.abs(Math.round(duration.asHours()));
  const minutes = Math.abs(Math.round(duration.asMinutes()));
  const seconds = Math.abs(Math.round(duration.asSeconds()));
  if (years >= 1) {
    if (years === 1) {
      return 'an year';
    } else {
      return `${years} years`;
    }
  } else if (months >= 1) {
    if (months === 1) {
      return 'a month';
    } else {
      return `${months} months`;
    }
  } else if (weeks >= 1) {
    if (weeks === 1) {
      return 'a week';
    } else {
      return `${weeks} weeks`;
    }
  } else if (days >= 1) {
    if (days === 1) {
      return 'a day';
    } else {
      return `${days} days`;
    }
  } else if (hours >= 1) {
    if (hours === 1) {
      return 'an hour';
    } else {
      return `${hours} hours`;
    }
  } else if (minutes >= 1) {
    if (minutes === 1) {
      return 'a minute';
    } else {
      return `${minutes} minutes`;
    }
  } else {
    if (seconds === 1) {
      return 'a second';
    } else {
      return `${seconds} seconds`;
    }
  }
}

export const BG_COLOR_BY_TRADING_ACCOUNT_STATUS = {
  PENDING: 'bg-yellow-500',
  GENERATING: 'bg-yellow-500',
  ACTIVE: 'bg-[#3CCB7F]',
  BLOCKED: 'bg-[#F04438]',
  READY_TO_ADVANCE: 'bg-[#3CCB7F]',
  ADVANCING_REQUEST: 'bg-yellow-500',
  ADVANCING_IN_PROGRESS: 'bg-yellow-500',
  ADVANCED: 'bg-[#3CCB7F]',
  FAILED_DAILY_EVALUATION: 'bg-[#F04438]',
  FAILED_PERMANENTLY: 'bg-[#F04438]',
  ERROR_FAILING_PERMANENTLY: 'bg-[#F04438]',
  ERROR_FAILING_DAILY_EVALUATION: 'bg-[#F04438]',
  ADVANCING_FAILED: 'bg-[#F04438]',
  GENERATION_FAILED: 'bg-[#F04438]',
  EVALUATION_IN_PROGRESS: 'bg-yellow-500',
  EVALUATION_FAILED: 'bg-[#F04438]'
};

export const TEXT_COLOR_BY_TRADING_ACCOUNT_STATUS = {
  PENDING: 'text-yellow-500',
  GENERATING: 'text-yellow-500',
  ACTIVE: 'text-[#3CCB7F]',
  BLOCKED: 'text-[#F04438]',
  READY_TO_ADVANCE: 'text-[#3CCB7F]',
  ADVANCING_REQUEST: 'text-yellow-500',
  ADVANCING_IN_PROGRESS: 'text-yellow-500',
  ADVANCED: 'text-[#3CCB7F]',
  FAILED_DAILY_EVALUATION: 'text-[#F04438]',
  FAILED_PERMANENTLY: 'text-[#F04438]',
  ERROR_FAILING_PERMANENTLY: 'text-[#F04438]',
  ERROR_FAILING_DAILY_EVALUATION: 'text-[#F04438]',
  ADVANCING_FAILED: 'text-[#F04438]',
  GENERATION_FAILED: 'text-[#F04438]',
  EVALUATION_IN_PROGRESS: 'text-yellow-500',
  EVALUATION_FAILED: 'text-[#F04438]'
};

export function isUserAuthenticated() {
  const token = localStorage.getItem('authToken');
  if (!token) return false;
  const decoded = jwtDecode(token);
  if (!decoded) return false;
  if (decoded.sub !== 'auth-login') return false;
  const expiry = decoded.exp;
  return expiry >= new Date() / 1000;
}

export async function getCaptchaToken() {
  return await ReactRecaptcha3.getToken();
}

export function getOrdinalNumber(number) {
  if (number === 0) return "0";

  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return number + "th";
  }

  return number + (suffixes[lastDigit] || suffixes[0]);
}

export const AFFILIATE_TYPE= {
  AMBASSADOR: 'AMBASSADOR',
  PARTNER: 'PARTNER',
  USER: 'USER'
}

export function getBadge(badge, size='20px') {
  switch (badge) {
    case AFFILIATE_TYPE.AMBASSADOR:
      return <img src={blueBadge} alt="Gold Badge" style={{maxWidth: size, maxHeight: size}}/>;
    case AFFILIATE_TYPE.PARTNER:
      return <img src={greenBadge} alt="Blue Badge" style={{maxWidth: size, maxHeight: size}}/>;
    default:
      return <img src={silverBadge} alt="Gray Badge" style={{maxWidth: size, maxHeight: size}}/>;
  }
}

export const formatDate = dateString => {
  return new Date(dateString).toLocaleString('default', { day: '2-digit', month: '2-digit', year: "numeric", hour: "2-digit", minute: '2-digit', second: '2-digit'});
};
