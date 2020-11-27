export const findUser = (users = [], userId) =>
users.find((user) => user.id === userId);

export const findFriend = (friends = [], friendId) =>
friends.find((friend) => friend.id === friendId);

export const findScrtime = (scrtimes = [], scrtimeUserId) =>
scrtimes.find((scrtime) => scrtime.user_id === scrtimeUserId);
