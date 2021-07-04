const { expect } = require("chai");

describe("Contract", () => {
  it("should return its name", async () => {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy("Contract");

    await contract.deployed();
    expect(await contract.getName()).to.equal("Contract");
  });
  it("should change its name when requested", async () => {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy("Contract");

    await contract.changeName("Another Contract");
    expect(await contract.getName()).to.equal("Another Contract");
  });
});
