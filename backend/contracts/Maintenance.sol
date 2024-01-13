// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MaintenanceFactory {
    struct AuditTrail {
        address byAddress;
        uint timeStamp;
    }

    mapping(address => Maintenance[]) aircraftToMaintenance;
    mapping(address => AuditTrail[]) aircraftAuditTrail;

    function createMaintenance(
        address _aircraft,
        uint16 _type,
        string memory _infoCID,
        string memory _employeeId,
        string memory _employeeName,
        string memory _role,
        string memory _supervisorApproval, //sign
        uint _supervisorApprovalTimeStamp,
        uint _labourHours,
        uint timeStamp
    ) public returns (address) {
        Maintenance maintenance = new Maintenance(
            _type,
            _infoCID,
            _employeeId,
            _employeeName,
            _role,
            _supervisorApproval,
            _supervisorApprovalTimeStamp,
            _labourHours,
            msg.sender
        );
        aircraftToMaintenance[address(_aircraft)].push(maintenance);
        aircraftAuditTrail[address(_aircraft)].push(
            AuditTrail(msg.sender, timeStamp)
        );
        return address(maintenance);
    }

    function getAllMaintenanceForAircraft(
        address _aircraft
    ) public view returns (address[] memory) {
        Maintenance[] memory maintainences = aircraftToMaintenance[_aircraft];
        address[] memory addresses = new address[](maintainences.length);

        for (uint i = 0; i < maintainences.length; i++) {
            addresses[i] = address(maintainences[i]);
        }
        return addresses;
    }

    function getAllAuditTrailForAircraft(
        address _aircraft
    ) public view returns (AuditTrail[] memory) {
        AuditTrail[] memory auditTrail = aircraftAuditTrail[_aircraft];
        return auditTrail;
    }
}

contract Maintenance {
    struct Personnel {
        string employeeId;
        string employeeName;
        string role;
    }

    struct ComplianceCheck {
        bool isChecked;
        string description;
    }

    struct Materials {
        string materialType;
        string serialNumber;
        uint newOrReplaced; //1 for new, 2 for replaced
    }

    struct QCTest {
        string description;
        bool performed;
    }

    uint16 public typeOfMaintenance; //1->Routine, 2->Scheduled, 3->Unscheduled
    string[] public categories;
    string public infoCID; //From infura
    Materials[] public parts;
    Personnel[] public technicians;
    Personnel public supervisor;
    string public supervisorApproval; //sign
    uint public supervisorApprovalTimeStamp;
    uint public labourHours;
    mapping(string => string) public attachments;
    mapping(string => ComplianceCheck) public complianceChecklist;
    mapping(string => QCTest) public qCTestList;
    mapping(string => string) public envConditionDocs;
    // address[] updatedBy;
    address createdBy;

    constructor(
        uint16 _type,
        string memory _infoCID,
        string memory _employeeId,
        string memory _employeeName,
        string memory _role,
        string memory _supervisorApproval, //sign
        uint _supervisorApprovalTimeStamp,
        uint _labourHours,
        // mapping(string => string) memory _attachments,
        // mapping(string => ComplianceCheck) memory _complianceChecklist,
        // mapping(string => QCTest) memory _qCTestList,
        // mapping(string => string) memory _envConditionDoc,
        // address[] memory _updatedBy,
        address _createdBy
    ) {
        typeOfMaintenance = _type;
        infoCID = _infoCID;
        supervisor = Personnel(_employeeId, _employeeName, _role);
        supervisorApproval = _supervisorApproval;
        supervisorApprovalTimeStamp = _supervisorApprovalTimeStamp;
        labourHours = _labourHours;
        // updatedBy.push(_createdBy); //Initial
        createdBy = _createdBy;
    }

    function pushPartsC(
        string memory materialType,
        string memory serialNumber,
        uint newOrReplaced
    ) public {
        parts.push(Materials(materialType, serialNumber, newOrReplaced));
    }

    function pushCategories(string memory category) public {
        categories.push(category);
    }

    function pushTechnician(
        string memory employeeId,
        string memory employeeName,
        string memory role
    ) public {
        technicians.push(Personnel(employeeId, employeeName, role));
    }

    // function pushParts

    function addComplianceChecklist(
        string memory id,
        bool isChecked,
        string memory description
    ) public {
        complianceChecklist[id] = ComplianceCheck(isChecked, description);
    }

    function addAttachment(string memory aType, string memory url) public {
        attachments[aType] = url;
    }

    function addQcTestList(
        string memory id,
        string memory description,
        bool perfomed
    ) public {
        qCTestList[id] = QCTest(description, perfomed);
    }

    function addEnvConditionDocs(
        string memory docType,
        string memory url
    ) public {
        envConditionDocs[docType] = url;
    }

    // function pushToUpdatedBy(address _by) public {
    //     updatedBy.push(_by);
    // }
}
