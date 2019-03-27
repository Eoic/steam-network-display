const { ROOT_USER_ID } = require('./config');
const Queue = require('./queue');
const { getFriendsList, getUserLevel, getUserProfile } = require('./steam-api');
const MAX_DEPTH = 1;

// TODO: Use promises instead of callbacks
async function generateGraphData() {
    const usersToTraverse = new Queue();
    usersToTraverse.add({ id: ROOT_USER_ID });
    let users = {};

    for (let depth = 0; depth < MAX_DEPTH; depth++) {
        let queueLength = usersToTraverse.size();

        for (let queueIndex = 0; queueIndex < queueLength; queueIndex++) {
            let currentUser = usersToTraverse.remove().id;
            let usersList = await getFriendsList(currentUser);

            if (isResponseValid(usersList)) {
                users[currentUser] = usersList.friendslist.friends;
                users[currentUser].forEach(friend => usersToTraverse.add({ id: friend.steamid }));
                currentUser = usersToTraverse.first();
            }
        }
    }
}

generateGraphData(ROOT_USER_ID);

function isResponseValid(userList) {
    if (userList.hasOwnProperty('friendslist')) {
        if (userList.friendslist.hasOwnProperty('friends')) {
            return true;
        } else console.warn('Users list does not contain property \'friends\'');
    } else console.warn('Received empty list of users.');
    return false;
}

module.exports = generateGraphData;