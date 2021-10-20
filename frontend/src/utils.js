import { keyStores, connect, WalletConnection, utils } from "near-api-js";
export const CONTRACT_NAME = "dev-1634677648543-85729454891971";

export const assignWallet = async () => {
  const config = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };
  const near = await connect(config);
  const wallet = new WalletConnection(near, "josegabriel.testnet");
  return wallet;
};

export const logIn = (wallet) => {
  wallet.requestSignIn(CONTRACT_NAME, "josegabriel");
};

export const logOut = (wallet) => {
  wallet.signOut();
};

export const getArtists = async (wallet) => {
  const config = {
    contractId: CONTRACT_NAME,
    methodName: "listNFTArtists",
  };
  const list = await wallet.account().functionCall(config);
  return list;
};

export const becomeAnArtist = async (
  wallet,
{  profesionalBackground,
  hiringCost,
  emailContact
}) => {
  const config = {
    contractId: CONTRACT_NAME,
    methodName: "becomeAnArtist",
    args: {
      profesionalBackground,
      hiringCost,
      emailContact,
    },
  };
  await wallet.account().functionCall(config);
};
