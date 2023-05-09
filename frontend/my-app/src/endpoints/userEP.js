import fetch from 'node-fetch';
import { backendRoute } from './backendRoute';

function setCookie(name, value, hours) {
  var expires = "";
  if (hours) {
    var date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=None; Secure;";
}

async function userEP(user, pass, type) {
  try {
    const response = await fetch(`${backendRoute}/${type}`, {
      method: 'POST',
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    var jsonRes = await response.json();

    setCookie('username', jsonRes['username'], 6);

    return 1;
  } catch (error) {
    if (error instanceof Error && error.name === "401 Unauthorized") {
      console.log('error message: ', error.message);
      return -1;
    } else {
      console.log('unexpected error: ', error);
      return -2;
    }
  }
}

export default userEP;