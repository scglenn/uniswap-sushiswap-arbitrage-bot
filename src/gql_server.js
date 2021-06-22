const axios = require('axios');

const main = async () => {
  const results = await axios.post(
    'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    {
      query: `
      {
        pairs(first: 10, where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"}, orderBy: reserveUSD, orderDirection: desc) {
          id
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
          reserveUSD
          volumeUSD
        }
      }
      `
    }
  );

  console.log(results.data.data.pairs);
}

main();