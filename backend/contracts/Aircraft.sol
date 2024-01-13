// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";

contract AircraftFactory {
    mapping(address => AircraftNFT[]) public manufacturerToAircrafts;

    AircraftNFT[] public aircrafts;
    uint tokenId = 0;
    address[] myNFTs; //Temp

    function registerAircraft(
        string memory _name,
        string memory _symbol,
        string memory _serialNumber,
        string memory _engineNumber,
        uint _manufacturePrice,
        string memory _imageUrl
    ) public returns (address) {
        AircraftNFT aircraft = new AircraftNFT(
            tokenId,
            msg.sender,
            payable(msg.sender),
            _name,
            _symbol,
            msg.sender,
            0,
            _serialNumber,
            _engineNumber,
            _manufacturePrice,
            _imageUrl
        );
        aircrafts.push(aircraft);
        manufacturerToAircrafts[msg.sender].push(aircraft);
        tokenId += 10;
        return address(aircraft);
    }

    function findMyAircrafts() public returns (address[] memory) {
        for (uint i = 0; i < myNFTs.length; i++) {
            myNFTs.pop();
        }
        for (uint i = 0; i < aircrafts.length; i++) {
            (
                address __, //Show aircraft manufacturer
                string memory ___,
                string memory ____,
                address currentOwner,
                uint _____,
                uint ______,
                string memory _______,
                string memory ________
            ) = aircrafts[i].info();
            if (currentOwner == msg.sender) {
                myNFTs.push(address(aircrafts[i]));
            }
        }
        return myNFTs;
    }
}

//This contract is responsible for factory, it will mint the NFT and send it to the manufacture
contract AircraftNFT is ERC721Base{
    uint myTokenId;

    struct Aircraft {
        address manufacturer; //Show aircraft manufacturer
        string serialNumber;
        string engineNumber;
        address payable currentOwner;
        uint manufacturePrice;
        uint lastResalePrice;
        string imageUrl;
        string marketStatus;
    }

    Aircraft public info;
    mapping(address => bool) authorizedEditors;
    mapping(address => uint) public biddings;
    // mapping(uint => address payable) public currentBidding;
    address payable highestBidder;
    uint highestBid;
    address[] public owners;

    event BidPlaced(address indexed bidder, uint256 amount);
    event BidAccepted(address indexed bidder, uint256 amount);
    event BidWithdrawn(address indexed bidder, uint256 amount);

    constructor(
        uint _tokenId,
        address _defaultAdmin,
        address payable _owner,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        string memory _serialNumber,
        string memory _engineNumber,
        uint _manufacturePrice,
        string memory _imageUrl
    ) ERC721Base(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps
        )
    {
        //This is when aircraft is put into the market
        info = Aircraft(
            _defaultAdmin,
            _serialNumber,
            _engineNumber,
            _owner,
            _manufacturePrice,
            0,
            _imageUrl,
            "OFF_MARKET"
        );
        owners.push(_defaultAdmin);
        myTokenId = _tokenId;
    }

    modifier onlyAllowedOperator(address from) {
        require(info.currentOwner == from, "Not allowed to transfer.");

        _;
    }

    modifier onlyHighestBidder() {
        require(msg.sender == highestBidder, "You are not the highest bidder");
        _;
    }

    modifier higherBidding(uint _bidding) {
        require(
            _bidding > highestBid + 1000 wei,
            "Bidding price lower than 1000000 Wei"
        );

        _;
    }

    function addAuthorizedEditor(address _editor) public {
        authorizedEditors[_editor] = true;
    }

    function removeAuthorizedEditor(address _editor) public {
        authorizedEditors[_editor] = false;
    }

    function placeBid(uint256 _amount) external higherBidding(_amount) payable {
        require(msg.sender != owner(), "Owner cannot place bids");
        // If there was a previous highest bidder, refund their bid
        if (highestBidder != address(0)) {
            highestBidder.transfer(highestBid);
            // transfer(highestBidder, highestBid);
            emit BidWithdrawn(highestBidder, highestBid);
        }

        // Accept the new bid
        require(msg.value == _amount, "Amount not present");
        highestBidder = payable(msg.sender);
        highestBid = _amount;
        biddings[msg.sender] = _amount;
        emit BidPlaced(msg.sender, _amount);
    }

    function acceptBid() external onlyOwner {
        require(highestBidder != address(0), "No bids have been placed yet");

        // Transfer the token to the owner
        
        highestBidder.transfer(highestBid);
        emit BidAccepted(highestBidder, highestBid);

        
        transferFrom(info.currentOwner, msg.sender, myTokenId);
        info.currentOwner = highestBidder;
        info.lastResalePrice = highestBid;
        owners.push(msg.sender);
        info.marketStatus = "OFF_MARKET";

        // Reset highest bid
        highestBidder = payable(address(0));
        highestBid = 0;

        this.setOwner(msg.sender);
    }

    function withdrawBid() external onlyHighestBidder {
        require(highestBidder != address(0), "No bids have been placed yet");

        // Refund the bid to the bidder
        highestBidder.transfer(highestBid);
        // this.transfer(highestBidder, highestBid);
        emit BidWithdrawn(highestBidder, highestBid);

        // Reset highest bid
        highestBidder = payable(address(0));
        highestBid = 0;
    }

    function getHighestBid() external view returns (address, uint256) {
        return (highestBidder, highestBid);
    }

    function putOnMarket(uint _startAmount) public onlyAllowedOperator(msg.sender) {
        highestBid = _startAmount;
        info.marketStatus = "ON_MARKET";
    }
}
