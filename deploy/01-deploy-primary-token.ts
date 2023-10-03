import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "ethers"

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
){
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    log("Deploying Governance Token...")

    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        // wait confirmations
    })
    //verify to check if its the development chain
    log(`Deployed governance token to address ${governanceToken.address}`)
};

const delegate = async (governanceTokenAddress: string, delegatedAccount: string) => {
    const governanceToken = await ethers.getAddress("GovernanceToken");
    const tx = await governanceToken.delegate(delegatedAccount);
    await tx.wait(1);
    console.log(`Checkpoints ${await governanceToken.numCheckpoints(delegatedAccount)}`);
}

export default deployGovernanceToken