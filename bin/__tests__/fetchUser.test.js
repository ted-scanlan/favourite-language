const { fetchUser } = require('../src/fetchUser');
const mockAxios = require("axios")
const mockObject = require("../__fixtures__/mockObject")
API_KEY = process.env.API_KEY


it("fetches data from api", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { mockObject }
    })
  );

  const repos = await fetchUser('ted-scanlan', API_KEY);

expect(repos).toEqual({mockObject})
expect(mockAxios.get).toHaveBeenCalledTimes(1);
expect(mockAxios.get).toHaveBeenCalledWith(
  "http://api.github.com/users/ted-scanlan/repos", {
    headers: {
      Authorization: 'Bearer ' + API_KEY
    }
  })



});
