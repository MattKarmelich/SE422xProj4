import fetch from 'node-fetch';
import { backendRoute } from './backendRoute';

async function postAd(cat, fields) {
  try {
    const response = await fetch(`${backendRoute}/posting`, {
      method: 'POST',
      body: JSON.stringify({
        category: cat,
        ...fields
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const result = (await response.json())

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

async function getCatAds(cat) {
    try {
      // 👇️ const response: Response
      const response = await fetch(`${backendRoute}/postings`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      // 👇️ const result: GetUsersResponse
      const result = (await response.json());
  
      console.log('result is: ', JSON.stringify(result, null, 4));
  
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
}

export { postAd, getCatAds };