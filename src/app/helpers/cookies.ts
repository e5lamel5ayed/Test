/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */

export const saveObjectToCookie = (name: string, value: string): void => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};
export function getObjectFromCookie(name: string) {
  const nameEQ = `${name}=`;
  const cookiesArr = document.cookie.split(';');

  for (let i = 0; i < cookiesArr.length; i++) {
    const cookie = cookiesArr[i].trim(); // trim spaces

    if (cookie.indexOf(nameEQ) === 0) {
      const encodedStr = cookie.substring(nameEQ.length, cookie.length);
      const jsonStr = decodeURIComponent(encodedStr); // decode the URI-encoded string
      return JSON.parse(jsonStr);
    }
  }

  return null;
}
export function clearAllCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie;

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
