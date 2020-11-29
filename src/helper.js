export const findUser = (users = [], userId) =>
users.find((user) => user.id === userId);

export const findFriend = (friends = [], friendUserId) =>
friends.find((friend) => friend.friend_user_id === friendUserId);

export const findScrtime = (scrtimes = [], scrtimeUserId) =>
scrtimes.find((scrtime) => scrtime.user_id === scrtimeUserId);

export const findMyScrtime = (scrtimes = [], myscrtimeUserId) =>
scrtimes.find((scrtime) => scrtime.user_id === myscrtimeUserId)

