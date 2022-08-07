const getCookie = (name: string) => {
  const cookie = document.cookie.split(';').filter((cookie) => cookie.trim().startsWith(`${name}=`))[0];
  const cookieValue = cookie?.split('=')[1];
  return cookieValue || '';
};

type CookieOptions = {
  path: string;
  domain: string;
  expires: string;
  'max-age': number;
  secure: boolean;
  samesite: 'strict' | 'lax' | '';
};

const setCookie = (name: string, value: string, options: Partial<CookieOptions> = {}) => {
  options = {
    path: '/',
    ...options,
  };

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
};

const deleteCookie = (name: string) => setCookie(name, '', { 'max-age': -1 });

export const Cookies = {
  getCookie,
  setCookie,
  deleteCookie,
  PHONE_NUMBER: '_dcash_tel',
  USER_DATA: 'userData',
  DIFFERENCE_HAVE: '_diff_have',
};
