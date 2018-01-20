pragma solidity ^0.4.18;

contract IdManager {

    struct Id {
        uint rememberMeId;
        bytes32 name;
        bytes32 region;
    }

    mapping(address => Id) idMap;

    modifier isOwner {
        require(msg.sender == owner);
    }

    function IdManager() {

    }

    function registerId(address add, uint rememberMeId, bytes32 name, bytes region) isYoti {

    }

    function isValidId() {

    }

}