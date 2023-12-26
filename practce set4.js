// Exercise: String Checkers

// 1. Write a function called `containsVowel` that takes a string as an argument
//    and returns true if the string contains at least one vowel (a, e, i, o, u),
//    and false otherwise.

// includes() with
const contains_vowels=(b,c)=>{
    b = prompt("enter the string")
    let k = /[aeiou]/i.test(b)
    // c = b.includes("a","e","i","o","u")
    return console.log(k)
}
contains_vowels();

// 2. Write a function called `startsWithCapital` that takes a string as an argument
//    and returns true if the string starts with a capital letter, and false otherwise.

 const startsWithCapital=(g,f)=>{
    g = prompt("enter the string")
    let startsWithCapital = /^[A-Z]/.test(g);
    return console.log(startsWithCapital) 
}
startsWithCapital()


for (let i = 65; i <= 90; i++) {
    let uppercaseLetter = String.fromCharCode(i);
    console.log(uppercaseLetter+" ");

}

const containsVowel = () => {
    let inputString = prompt("Enter the string");
    let hasVowel = /[aeiou]/i.test(inputString);
    let hasVowel1 = /[AEIOU]/i.test(inputString);
    console.log(hasVowel||hasVowel1);
    return hasVowel || hasvowel1;
};

containsVowel();



  