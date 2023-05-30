const getInfoPage = (req, res) => {
  res.send([
    {
      firsName: "Adeolu",
      lastName: "Amole",
      phoneNumber: +2347033959586,
      town: "Ogbomoso",
      state: "Oyo",
    }
  ]);
};

// module.exports = getInfoPage
module.exports = getInfoPage;