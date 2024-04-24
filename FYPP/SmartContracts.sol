// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HospitalInteroperability {
    struct Patient {
        string name;
        string dataHash;
        mapping(address => bool) accessRequests; // mapping of hospital address to access status
    }

    mapping(address => bool) public hospitals;
    mapping(address => Patient) public patients;

    modifier onlyHospital() {
        require(hospitals[msg.sender], "Caller is not a registered hospital");
        _;
    }

    function registerHospital() external {
        hospitals[msg.sender] = true;
    }

    function addPatientData(string memory _name, string memory _dataHash) external onlyHospital {
        patients[msg.sender] = Patient(_name, _dataHash);
    }

    function requestPatientData(address _patientAddress) external {
        patients[_patientAddress].accessRequests[msg.sender] = true;
    }

    function approveAccess(address _requester) external {
        require(msg.sender == _requester || msg.sender == _patientAddress, "Not authorized to approve access");
        patients[msg.sender].accessRequests[_requester] = false;
    }

    function denyAccess(address _requester) external {
        require(msg.sender == _requester || msg.sender == _patientAddress, "Not authorized to deny access");
        patients[msg.sender].accessRequests[_requester] = false;
    }
}
