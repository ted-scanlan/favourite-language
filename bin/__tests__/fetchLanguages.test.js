const { fetchLanguages } = require('../src/fetchLanguages');
const mockAxios = require("axios")
const mockObjectLanguages = require("../__fixtures__/mockObjectLanguages")


it("fetches data from languages api", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { mockObjectLanguages }
    })
  );

  const languages = await fetchLanguages('ted-scanlan', 'makersb_n_b', "be94e3e8b03a88ca0d4d8cffa06cd6b89de4964c");

expect(languages.data).toEqual({mockObjectLanguages})
})
