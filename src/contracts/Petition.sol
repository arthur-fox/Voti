pragma solidity ^0.4.18;

import "./IdManage.sol";

contract PetitionManager {

    struct Petition {
        mapping(address => bool) hasVoted;
        string description;
        uint votesFor;
        uint votesAgainst;
        uint256 endEpoch;
    }

    Petition[] allPetitions;
    address idManager;    

    function PetitionManager(address _idManager) public {
        idManager = _idManager;
    }

    function getTenPetitions(uint startIndex) public view returns {
        
    }

    function vote(bytes32 vote) {
        // check ID is valid
        require(IdManager(idManager).checkId(msg.sender));



        if (!hasVoted[msg.sender]) {
            if (vote == bytes32("for")) {
                votesFor++;
            } else if (vote == bytes32("against")) {
                votesAgainst++;
            } else {
                revert();
            }
        }
    }
}