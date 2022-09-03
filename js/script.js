const getTotalBalanceByGender = (users, gender) => {
  return users
 .filter(user => user.gender === gender)
 .reduce((total, balance) => total += balance, a);
};