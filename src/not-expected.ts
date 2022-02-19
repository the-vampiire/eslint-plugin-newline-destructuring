import { Kmd } from "algosdk";

const {
ALGORAND_KMD_API_BASE_URL,
ALGORAND_KMD_API_PORT,
ALGORAND_KMD_TOKEN
} =
  process.env;

const kmdClient = new Kmd(
  ALGORAND_KMD_TOKEN,
  ALGORAND_KMD_API_BASE_URL,
  ALGORAND_KMD_API_PORT,
);

export const kmdHealthCheck = () =>
  kmdClient.listWallets().then(() => console.log("Connected to KMD API"));

export default kmdClient;
