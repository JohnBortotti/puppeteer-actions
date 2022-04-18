module.exports = {
  key: "page-back",
  function: async function(page: any) {
    await page.goBack();
  },
};
