var katzDeli = [];

function takeANumber(katzDeliLine,name){ //katzDeliLine= current line array?
  katzDeliLine.push("name")
  return katzDeliLine.length +1
}

function nowServing(){
  if(katzDeliLine.length>0){
    return katzDeliLine[0]
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(){
  if(katzDeliLine.length>0){
    var string = "The line is currently: "//1. Ada, 2. Grace"
    for(var i=0;i<katzDeliLine.length;i++){
      string = string + (i=0 ? `${i}. ${katzDeliLine[i]}` : `, ${i}. ${katzDeliLine[i]}`)
    }
  }else{
    return "The line is currently empty."
  }

}
