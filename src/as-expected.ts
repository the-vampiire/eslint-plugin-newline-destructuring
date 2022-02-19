import { Algodv2 } from "algosdk";

/**
expected:

const {
  ALGORAND_ALGOD_API_BASE_URL,
  ALGORAND_ALGOD_API_PORT,
  ALGORAND_ALGOD_TOKEN,
} = process.env;
 */

const {
  ALGORAND_ALGOD_API_BASE_URL,
  ALGORAND_ALGOD_API_PORT,
  ALGORAND_ALGOD_TOKEN,
} = process.env;

const algodClient = new Algodv2(
  ALGORAND_ALGOD_TOKEN,
  ALGORAND_ALGOD_API_BASE_URL,
  ALGORAND_ALGOD_API_PORT,
);

export const algodHealthCheck = () =>
  algodClient
    .healthCheck()
    .do()
    .then(() => console.log("Connected to AlgoD API"));

export default algodClient;
