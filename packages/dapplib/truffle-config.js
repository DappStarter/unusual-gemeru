require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth outside pumpkin grace neck equal gaze'; 
let testAccounts = [
"0x39f063d4d4887425de61577e77c8f838583eeb37ca9e37023cd075782bed1730",
"0x550088cded763e0245f0b1ed9743d6526912bebcc5618d5b3e3d797e3786bac1",
"0xf6d0fd578ba085c3d094672f3f56fc06cbecd01e44ca70f5764fed00515099e7",
"0xec325e60cb1d4b4069b784431c910cf63d01edbaeb6c68319832c820343641ee",
"0x020a2c4ca31cb31ce059033bd4dd5329acedd1b534a49ab78cde8797788e1113",
"0xbdd7b845419a76bf78b14b74717eaa4b2113822049a79a1331299c2a57d19598",
"0x531519b59cfb75601e2bec549b5a51f66cd35b3060f7fc959e2983043f8906da",
"0x745dcbf8b58bda3cb0d41125787f6f196c162d2147ffe913fd47e545e51cf928",
"0x222cd18c03d581725d451a2cee33c1646ad8aca9623b32c2a70ee47d3b63de5b",
"0x11fee88b0b12d8960e77183765a07ce3953c800e142ce9974668711c39a5ded6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
