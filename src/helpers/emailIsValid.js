export function emailIsValid(email) {

  var re = /\S+@\S+\.\S+/;
  return re.test(email);

}