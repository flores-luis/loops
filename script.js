// Loop that prints odd numbers 1-20
for (n = 0; n < 21; n++) {
    if (n % 2 != 0){
        console.log(n)
    };
};

//Loop that prints decreasing Multiples of 3 from 100

for (e = 101; e >= 0; e--){
    if (e % 3 == 0){
        console.log(e)
    };
};

////Loop that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for (a = 4; a > -4; a = a -1.5){
    console.log(a);
};

//code that will add all of the values from 1-100 and at the end console.log the result We should get back 5050 at the end.

sum = 0;
for (b = 1; b < 101; b++){
    sum += b;
    console.log(sum);
};

//We should get back 479001600 at the end.

num = 1;
for (b = 1; b < 13; b++){
    num *= b;
};
console.log(num);