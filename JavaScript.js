const max = 3; //max should always be three, this is what the random return value is based on.
function computerPlay (a)
{
    
    let x = Math.floor(Math.random() * max);

    return x;
}

console.log(computerPlay(max));