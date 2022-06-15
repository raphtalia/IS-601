function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(ms);
    }, ms);
  });
}

const fakeApi = {
  fetchToDos: async () => {
    await wait(50);
    return [
      { task: "Make Bed", due: new Date(2009, 5, 5) },
      { task: "Clean room", due: new Date(3000, 5, 5) },
    ];
  },
};

function getFutureToDos(todos) {
  const now = new Date();
  return todos.filter((todo) => todo.due > now);
}

(async () => {
  console.log(getFutureToDos(await fakeApi.fetchToDos()));
})();
