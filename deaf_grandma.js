function deafGrandma() {
  let input = ''
  let whisper = /[a-z]/
  let shout = /[A-Z]/g
  while(input != "GOODBYE!"){
    input = prompt("Say something to grandma!")
    if(input == "GOODBYE!") {
      input = prompt("LEAVING SO SOON?")
      if(input == "GOODBYE!"){
        return alert("LATER, SKATER!")
      } else if (whisper.test(input) == true){
        prompt("SPEAK UP, KID!")
      } else if (shout.test(input) == true){
        prompt("NO, NOT SINCE 1946!")
      } else {
        prompt("WHAT?")
      }
    } else if (whisper.test(input) == true){
      prompt("SPEAK UP, KID!")
    } else if (shout.test(input) == true){
      prompt("NO, NOT SINCE 1946!")
    } else {
      prompt("WHAT?")
    }
  }
}
//window.prompt
deafGrandma();