const { expect } = require("chai");

describe("Contract", () => {
  it("should return its name", async () => {
    const Contract = await ethers.getContractFactory("Contract");
    const Contract = await Contract.deploy("Contract");

    await Contract.deployed();
    expect(await Contract.getName()).to.equal("Contract");
  });
  it("should change its name when requested", async () => {
    const Contract = await ethers.getContractFactory("Contract");
    const Contract = await Contract.deploy("Contract");

    await Contract.changeName("Another Contract");
    expect(await Contract.getName()).to.equal("Another Contract");
  });
});
