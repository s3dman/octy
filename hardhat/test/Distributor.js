const { expect } = require("chai");
const { ethers } = require("ethers");

describe("Distributor contract", function () {
	let deployer, recipients, contract;

	beforeEach(async function () {
		// Get signers (accounts)
		const provider = new ethers.providers.JsonRpcProvider(
			"http://127.0.0.1:8545/"
		); // Use your provider here
		const accounts = await provider.listAccounts();
		deployer = await ethers.getSigner(accounts[0]); // Deployer is the first account
		recipients = accounts
			.slice(1)
			.map((account) => ethers.getSigner(account)); // Other accounts are recipients

		// Deploy the contract
		const Contract = await ethers.getContractFactory("Distributor");
		contract = await Contract.deploy(recipients.map((r) => r.address));
		await contract.deployed();
	});

	describe("Deployment", function () {
		it("should have the correct recipients", async function () {
			const deployedRecipients = await contract.recipients();
			expect(deployedRecipients[0]).to.equal(
				await recipients[0].getAddress()
			);
			expect(deployedRecipients[1]).to.equal(
				await recipients[1].getAddress()
			);
		});
	});

	describe("Distribution", function () {
		// Test successful distribution with valid fractions
		it("should distribute funds to recipients based on fractions", async function () {
			const initialBalances = await Promise.all(
				recipients.map(async (recipient) => recipient.getBalance())
			);
			const fractions = [50, 50]; // 50% each

			await contract
				.connect(deployer)
				.distribute({ value: ethers.utils.parseEther("1") }, fractions);

			const finalBalances = await Promise.all(
				recipients.map(async (recipient) => recipient.getBalance())
			);

			// Check balance increase for each recipient based on their fraction
			expect(finalBalances[0]).to.be.gt(initialBalances[0]);
			expect(finalBalances[1]).to.be.gt(initialBalances[1]);
		});
	});
});
