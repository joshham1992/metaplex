export type NftCandyMachineIDL = {"version":"0.0.0","name":"nft_candy_machine","instructions":[{"name":"initializeConfig","accounts":[{"name":"config","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"name","type":{"array":["u8",32]}},{"name":"maxNumberOfLines","type":"u32"}]},{"name":"addConfigLines","accounts":[{"name":"config","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true}],"args":[{"name":"configLines","type":{"vec":{"defined":"ConfigLine"}}}]},{"name":"initializeCandyMachine","accounts":[{"name":"candyMachine","isMut":true,"isSigner":false},{"name":"wallet","isMut":false,"isSigner":false},{"name":"config","isMut":false,"isSigner":false},{"name":"authority","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"price","type":"u64"},{"name":"itemsAvailable","type":"u64"}]}],"accounts":[{"name":"candyMachine","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"wallet","type":"publicKey"},{"name":"tokenMint","type":{"option":"publicKey"}},{"name":"config","type":"publicKey"},{"name":"price","type":"u64"},{"name":"itemsAvailable","type":"u64"},{"name":"itemsRedeemed","type":"u64"},{"name":"bump","type":"u8"}]}},{"name":"config","type":{"kind":"struct","fields":[{"name":"bump","type":"u8"},{"name":"authority","type":"publicKey"},{"name":"name","type":{"array":["u8",32]}},{"name":"maxNumberOfLines","type":"u32"}]}},{"name":"configLine","type":{"kind":"struct","fields":[{"name":"data","type":{"defined":"Data"}},{"name":"isMutable","type":"bool"}]}},{"name":"creator","type":{"kind":"struct","fields":[{"name":"address","type":"publicKey"},{"name":"verified","type":"bool"},{"name":"share","type":"u8"}]}},{"name":"data","type":{"kind":"struct","fields":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"uri","type":"string"},{"name":"sellerFeeBasisPoints","type":"u16"},{"name":"creators","type":{"option":{"vec":{"defined":"Creator"}}}}]}}],"errors":[{"code":300,"name":"IncorrectOwner","msg":"Account does not have correct owner!"},{"code":301,"name":"Uninitialized","msg":"Account is not initialized!"},{"code":302,"name":"MintMismatch","msg":"Mint Mismatch!"},{"code":303,"name":"IndexGreaterThanLength","msg":"Index greater than length!"},{"code":304,"name":"ConfigMustHaveAtleastOneEntry","msg":"Config must have atleast one entry!"},{"code":305,"name":"NumericalOverflowError","msg":"Numerical overflow error!"}]};
import { IdlAccounts } from '@project-serum/anchor';



  

export type CandyMachine = IdlAccounts<NftCandyMachineIDL>["candyMachine"]

export type Config = IdlAccounts<NftCandyMachineIDL>["config"]

export type ConfigLine = IdlAccounts<NftCandyMachineIDL>["configLine"]

export type Creator = IdlAccounts<NftCandyMachineIDL>["creator"]

export type Data = IdlAccounts<NftCandyMachineIDL>["data"]
  
          