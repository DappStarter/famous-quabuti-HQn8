require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy reward stereo clump install person equal gather'; 
let testAccounts = [
"0xf4597d58e0db2a8e095490b71ba482fb65d56c27c8df8e419f76e8f08b2955f2",
"0x53d5a23f7ccdde30a1a6ddd87fd10a0822510acebc639940957046546f378e3f",
"0xd7140a8d1e3c0b23cf87c8bec65cc9fb553735d516cc532e4873af84431f8117",
"0x084bca6428ffa2782e3cdd1328594b9efbdb31d6c06946dc873f8ebc90dbbd27",
"0xcc66bc486237e8aab10fc4b79556e5f5a17a27602df8cec06705a832b67b9964",
"0xc69d205e7894d096d303f2c6526083d17c648087dc859b5864992b2e8d8b19fa",
"0xd56c9348a85fef9372d4244a8cf42dd6c478b7230adab6cd1a9e9f42cf37a74d",
"0x9e9d1f092444f60313a16fdf192ebf05b29862b564b556c9c080fe9958cfbd2f",
"0xb6a473952a1eae825a08d6b2f1a036ec74730dc772630902a0cd65280e6693d6",
"0xf737fcfffdf1d1dff5caa152f343754e0c47c204dd124753e6f3b391e320c9ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

