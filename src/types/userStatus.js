var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Inactive"] = 0] = "Inactive";
    UserStatus[UserStatus["Active"] = 1] = "Active";
    UserStatus[UserStatus["Pending"] = 2] = "Pending";
})(UserStatus || (UserStatus = {}));
module.exports = UserStatus;
