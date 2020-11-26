export const findUser = (users = [], userId) =>
users.find((user) => user.id === userId);

export const findFriend = (friends = [], friendId) =>
friends.find((friend) => friend.id === friendId);

export const findScrtime = (scrtimes = [], scrtimeId) =>
scrtimes.find((scrtime) => scrtime.id === scrtimeId);
