let translator = new Map () // creating the map

translator.set ("hello", "bonjour")  //  creating the values and keys
translator.set ("name", "nom")
translator.set ("dog", "chien")
translator.set ("cat", "chat")
translator.set ("house", "maison")
translator.set ("car", "voiture")
translator.set ("horse", "cheval")
translator.set ("duck", "canard")
translator.set ("child", "enfant")
translator.set ("adult", "adulte")

let translate = prompt (`Enter the word you would like to translate`)// user enters the value 
let translated = (translator.get((`${translate}`)))  // map selects the corresponding key *1
 
alert (`${translate} is ${translated} in French`) // the translation is displayed *2

// *1 and *2 can be replaced with console.log (translator.get((`${translate}`))) to just display the translated word in the console log, 
// I just thought this was a  better way to display the outcome