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
          console.log("SPEAK UP, KID!")
        } else if (shout.test(input) == true){
          console.log("NO, NOT SINCE 1946!")
        } else {
          console.log("WHAT?")
        }
      } else if (whisper.test(input) == true){
        console.log("SPEAK UP, KID!")
      } else if (shout.test(input) == true){
        console.log("NO, NOT SINCE 1946!")
      } else {
        console.log("WHAT?")
      }
    }
}
//window.prompt
deafGrandma();