module.exports = 
function check(str, bracketsConfig) {
  // your solution
  let counter = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    counter[i] = 0;      
  }

  let bracketType = [];
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] === bracketsConfig[j][0]) {
            if ((str[i] === bracketsConfig[j][0]) && (str[i] === bracketsConfig[j][1]) && (counter[j] === 1)) {
              // 
            } else {
              bracketType[i] = 'open';
              counter[j]++;               
            }
          }

          if (str[i] === bracketsConfig[j][1]) {
              if (counter[j] < 1) {
                  return false;
              }

              if ((str[i] === bracketsConfig[j][0]) && (str[i] === bracketsConfig[j][1]) && (bracketType[i] === 'open')) {
                // 
              } else {
                bracketType[i] = 'close';
                counter[j]--;   
                
                if ((bracketType[i - 1] === 'open') && (str[i - 1] !== bracketsConfig[j][0])) {
                  return false;
                }                
              }
          }   
      }      
  }

  return counter.join('') == 0;
}
