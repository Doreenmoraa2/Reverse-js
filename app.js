let word = [];

function reverse(strin){
    for(let y=strin.length-1; y>=0; y--){
      word.push(strin[y]);

    }
    return word.join("");
}
console.log(reverse("welcome"));