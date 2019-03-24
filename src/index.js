module.exports = function check(str, bracketsConfig) {
  // your solution
  var booleanArray = [];
  var lengthForStr = str.length;

  if (lengthForStr % 2 != 0) return false;

  var lengthForConfig = bracketsConfig.length;
  var signTestNumber = 1;
  var charFromBooleanArray;
  var charClose;
  for (var i = 0; i < lengthForStr; i++) {
      var charFromStr = str.charAt(i);      
      var openingValue = false;      
      var closingValue = false;
      var signTeatBoolean = false;
      for (let j = 0; j < lengthForConfig; j++) {
          if (bracketsConfig[j][0] == bracketsConfig[j][1] && charFromStr == bracketsConfig[j][0]) {
            signTeatBoolean = true;
              signTestNumber = (-1) * signTestNumber;
              charFromBooleanArray = charFromStr;
              console.log('signTestNumber = ', signTestNumber)
              break;
          }
          if (charFromStr == bracketsConfig[j][0]) {
              openingValue = true;
              break;
          }
          if (charFromStr == bracketsConfig[j][1]) {
              closingValue = true;
              charClose = bracketsConfig[j][0];
              break;
          }
      }
      if (signTeatBoolean == true) {
          if (signTestNumber == -1) {
              booleanArray.push(charFromStr);
              console.log('push=', charFromStr);
          }
          if (signTestNumber == 1 && charFromBooleanArray == booleanArray[booleanArray.length - 1]) {
              console.log('pop booleanArray[booleanArray.length-1]=', booleanArray[booleanArray.length - 1], ', charFromStr= ', charFromStr)
              booleanArray.pop();
          }
      } else {

          if (openingValue === true) {
              booleanArray.push(charFromStr);
              console.log('push=', charFromStr);
          }
          if (closingValue === true && charClose == booleanArray[booleanArray.length - 1]) {
              console.log('pop booleanArray[booleanArray.length-1]=', booleanArray[booleanArray.length - 1], ', charFromStr= ', charFromStr)
              booleanArray.pop();
          }
      }
  }
  return (booleanArray.length === 0);

}
