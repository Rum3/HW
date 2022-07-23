let str = 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.';
function find(str){
  return str.split(' ').filter(n => n.length > 2 && n.startsWith('t'));
}
console.log(find(str));