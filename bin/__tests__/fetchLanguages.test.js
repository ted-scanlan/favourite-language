const { fetchLanguages } = require('../src/fetchLanguages');
const mockAxios = require("axios")
const mockObjectLanguages = require("../__fixtures__/mockObjectLanguages")
API_KEY = process.env.API_KEY

it("fetches data from languages api", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { mockObjectLanguages }
    })
  );

  const languages = await fetchLanguages('ted-scanlan', 'makersb_n_b', API_KEY);

expect(languages.data).toEqual({mockObjectLanguages})
expect(mockAxios.get).toHaveBeenCalledTimes(1);
expect(mockAxios.get).toHaveBeenCalledWith(
  "http://api.github.com/repos/ted-scanlan/makersb_n_b/languages", {
    headers: {
      Authorization: 'Bearer ' + API_KEY
    }
  })
})
