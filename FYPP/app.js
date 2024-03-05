
window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

// Set up contract ABI 
const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_dataHash",
          "type": "string"
        }
      ],
      "name": "addPatientData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_requester",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        }
      ],
      "name": "approveAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_requester",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        }
      ],
      "name": "denyAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "registerHospital",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        }
      ],
      "name": "requestPatientData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hospitals",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "patients",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dataHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

// Set up contract address
const contractAddress = '0x8d53e9b7b6900279ad791e255fa7ceb6e7fb3dd9'; // Address of deployed smart contract

// Initialize contract object
const hospitalInteroperabilityContract = new web3.eth.Contract(contractABI, contractAddress);

// Example functions to interact with the contract

// Function to register hospital
async function registerHospital() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const result = await hospitalInteroperabilityContract.methods.registerHospital().send({ from: accounts[0] });
    console.log("Hospital registered:", result);
}

// Function to add patient data
async function addPatientData(name, dataHash) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const result = await hospitalInteroperabilityContract.methods.addPatientData(name, dataHash).send({ from: accounts[0] });
    console.log("Patient data added:", result);
}

// Function to request patient data
async function requestPatientData(patientAddress) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const result = await hospitalInteroperabilityContract.methods.requestPatientData(patientAddress).send({ from: accounts[0] });
    console.log("Request for patient data sent:", result);
}

// Function to approve access to patient data
async function approveAccess(requester) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const result = await hospitalInteroperabilityContract.methods.approveAccess(requester).send({ from: accounts[0] });
    console.log("Access approved:", result);
}

// Function to deny access to patient data
async function denyAccess(requester) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const result = await hospitalInteroperabilityContract.methods.denyAccess(requester).send({ from: accounts[0] });
    console.log("Access denied:", result);
}
