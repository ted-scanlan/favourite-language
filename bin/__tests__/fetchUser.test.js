const { fetchUser } = require('../src/fetchUser');
const mockAxios = require("axios")
const mockObject = require("../__fixtures__/mockObject")



it("fetches data from api", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { mockObject }
    })
  );

  const repos = await fetchUser('ted-scanlan', "be94e3e8b03a88ca0d4d8cffa06cd6b89de4964c");

expect(repos).toEqual({mockObject})
expect(mockAxios.get).toHaveBeenCalledTimes(1);
expect(mockAxios.get).toHaveBeenCalledWith(
  "http://api.github.com/users/ted-scanlan/repos", {
    headers: {
      Authorization: 'Bearer ' + 'be94e3e8b03a88ca0d4d8cffa06cd6b89de4964c'
    }
  })



});
