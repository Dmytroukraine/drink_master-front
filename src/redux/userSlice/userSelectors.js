export const getUserState = ({ user }) => user;
export const getUserAgeInYears = ({ user }) => {
  const date = new Date(user.user.birthDate);
  const date2 = new Date();

  const today = `${date2.getUTCFullYear()}.${date2.getUTCMonth()}`;
  const ageUserYearAndMounth = `${date.getUTCFullYear()}.${date.getUTCMonth()}`;
  const ageUser = Math.trunc(today - ageUserYearAndMounth);

  return ageUser;
};
