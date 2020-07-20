var n = window.prompt("Enter limit: ");

    nextPrime:
    for (let i = 2; i <= n; i++)
    { 
        for (let j = 2; j < i; j++) 
        { 
            if (i % j == 0) 
            continue nextPrime; // not a prime, go next i
        }

        console.log("Prime number: "+ i ); // a prime
    }