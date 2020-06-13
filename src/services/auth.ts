interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ol1sdak46ewfpj8f31nsfdlkfhsdlkf13jk3j3fdskhqwerf5gbvzhawqequg',
        user: {
          name: 'Daniel',
          email: 'daniel.versiane@gmail.com',
        },
      });
    }, 2000);
  });
}
