/* String:sequence of characters enclosed by either
 1.single quote ''
  2.double quote ""
  3.backtick ``
*/
let n=1
let name1= 'Ram'
let name2= "Hari"
let name3=`${n}Shyam`
console.log(name1, name2, name3);
length_str = name1.length
console.log(length_str);
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name3.indexOf('m'));
console.log(name3[5]);
word ='JavaScript'
console.log(word.indexOf('a'));
console.log(word.charAt(11));
console.log(name1.concat(' ',name2));
console.log(word.lastIndexOf('a'));
words = 'bnita'
if(words.toLowerCase().startsWith('a')){
    console.log('True');
}
else{
    console.log('False');
}

first = word.slice(0,4)
console.log(first);
second = word.slice(4)
console.log(second);
console.log(word.substring(0,4));
sentence = `This is used to change the life style. bit it also used to change purpose. `
// s=sentence.replace(/to/g, "too")
s=sentence.replaceAll( "to","too")
console.log(s);


level = "Bachelors "
if(level.toLowerCase().trim() == 'bachelors')
{
    console.log(true);
}
else{
    console.log(false);
}

console.log(name2.includes('a'))
console.log(name1.toString());
console.log(sentence.split('.'));
