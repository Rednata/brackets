module.exports = function check(str, bracketsConfig) {
  let s = [] ;
  for (let i of bracketsConfig) {
    s.push(i.join(''));  
}

let flag = true;
while (flag) {
  flag = false;
  for (let i of s) {
    let ind = str.indexOf(i);
    if (ind>= 0) {      
      str = str.slice(0,ind)+str.slice(ind+2);
      flag = true;
    }
  }  
}
return (str.length===0) ? true : false;
}
