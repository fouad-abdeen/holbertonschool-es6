export function taskFirst() {
    var task = 'I prefer const when I can.';
    
    const constResult = task;
    return constResult;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();
  
    let varResult = combination;
    return varResult;
  }
