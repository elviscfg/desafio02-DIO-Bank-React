const conta = {
  email: "elvis@dio.bank",
  password: "123456",
  name: "Elvis Cardoso",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
