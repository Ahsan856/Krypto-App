// https://eth-ropsten.alchemyapi.io/v2/Z4J4ZT7ywxYX4cPKer3Z7UxCQt0A7j5u

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/Z4J4ZT7ywxYX4cPKer3Z7UxCQt0A7j5u',
      accounts: ['d4e7e977939d8222586677294decbc440de33e265753fbb076bf79ac5fc7e303']
    }
  }
}