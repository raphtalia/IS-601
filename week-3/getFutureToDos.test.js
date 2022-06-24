import { getFutureToDos, fakeApi } from "./getFutureToDos";

describe("getFutureToDos", () => {
  // utility function to help create a delay
  // const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  // your code here.
  it("should only return an array of future todos", async () => {
    const response = await getFutureToDos(await fakeApi.fetchToDos());

    expect(response.length).toBe(1);
    expect(response[0].task).toBe("Clean room");
  });
});
