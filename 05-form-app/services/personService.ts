import { Person } from '../models/person';

const REGISTER_URL = 'http://localhost:8080/v1/users';

export const registerPerson = async (person: Person) => {
  const response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  });
  console.log(response.status);
  if (response.status != 201) {
    let errorMessage = `No se pudo registrar a la persona. Código ${response.status}`;
    try {
      const errorBody = await response.text();
      if (errorBody) {
        try {
          const parsed = JSON.parse(errorBody);
          if (parsed?.message && typeof parsed.message === 'string') {
            errorMessage = parsed.message;
          } else {
            errorMessage = errorBody;
          }
        } catch {
          errorMessage = errorBody;
        }
      }
    } catch {
      // ignore body parsing failures, we already have a default message
    }
    throw new Error(errorMessage);
  }

  // try returning JSON but allow empty responses
  try {
    return await response.json();
  } catch {
    return undefined;
  }
};
