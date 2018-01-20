pragma solidity ^0.4.18;

import "./IdManager.sol";
import "./SafeMath.sol";

contract Petition {

    using SafeMath for *;

    address idManager;
    string description;
    uint256 endEpoch;

    mapping(address => bool) hasVoted;

    // Should beware of overflows here! (maybe use safeMath library...)
    uint votesFor;
    uint votesAgainst;
    
    uint256 constant VOTE_FOR = 1;
    uint256 constant VOTE_AGAINST = 0;

    function Petition(address _idManager, string _description, uint256 _dayLength) public {
        idManager = _idManager;
        description = _description;
        endEpoch = now + (_dayLength * 1 days);
    }

    function vote(uint256 _vote) public {
        // check ID is valid
        require(idManager.delegatecall(bytes4(keccak256("isValidId()"))));
        // Shouldn't really do this as time can be manipulated by miners!
        require(now < endEpoch);
        require(!hasVoted[msg.sender]);

        if (_vote == VOTE_AGAINST) {
            votesAgainst++;
        } else if (_vote == VOTE_FOR) {
            votesFor++;
        } else {
            revert();
        }
    }
}
