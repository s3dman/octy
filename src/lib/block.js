import { ethers } from "ethers";
import abiSrc from "./Distributor.json";

const abi = ethers.Interface.from(abiSrc.abi); // Assuming the ABI is already parsed correctly
const bytecode = abiSrc.bytecode;

export async function deploy(signer, address) {
	try {
		const provider = new ethers.JsonRpcProvider();
		const wallet = new ethers.Wallet(signer, provider);
		const factory = new ethers.ContractFactory(abi, bytecode, wallet);
		const contract = await factory.deploy(address);
		return contract;
	} catch (error) {
		console.error(error);
	}
}
export async function donate(contractAddress, sender, fract, value) {
	try {
		const provider = new ethers.JsonRpcProvider();
		const wallet = new ethers.Wallet(sender, provider);
		const contract = new ethers.Contract(contractAddress, abi, wallet);
		const method = abi.getFunction("distribute");
		const overrides = {
			value: ethers.parseEther(value),
		};
		const result = await contract[method.name](fract, overrides);
		return result;
	} catch (error) {
		console.error(error);
	}
}

export async function balance(addr) {
	try {
		const provider = new ethers.JsonRpcProvider();
		const gbal = await provider.getBalance(addr);
		const bal = ethers.formatEther(gbal);

		return bal;
	} catch (error) {
		console.error("Donation error:", error);
	}
}

export async function trans(hash) {
	try {
		const provider = new ethers.JsonRpcProvider();
		const transaction = await provider.getTransaction(hash);
		console.log(ethers.formatEther(transaction.value));
		return transaction;
	} catch (error) {
		console.error("Error fetching transaction details:", error);
		return null;
	}
}
