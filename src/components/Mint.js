import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import abi from "../abi.json";

require("dotenv").config();
const { REACT_APP_CONTRACT_ADDRESS } = process.env;

const Mint = () => {
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.08);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  // console.log("C", connecctstatus);

  useEffect(() => {
    loadWeb3();
    // connectWallet();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.price().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const totalSupply = await ct.methods.totalSupply().call();
      setTokenSupply(totalSupply);
      connectWallet();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function mint() {
    const web3 = window.web3;
    const _value = price * quantity;
    const address = await web3.eth.getAccounts();

    await contract.methods
      .mint(quantity)
      .send({ from: address.toString(), value: _value });
    setMinted(true);
    const totalSupply = await contract.methods.totalSupply().call();
    setTokenSupply(totalSupply);
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      // setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return <></>;
};

export default Mint;
