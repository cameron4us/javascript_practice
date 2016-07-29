//This was a problem from HackerRank called "Compare the Triplets".


//Alice and Bob each created one problem for HackerRank. 
//A reviewer rates the two challenges, awarding points on a scale from 1 to 100
//for three categories: problem clarity, originality, and difficulty.

//We define the rating for Alice's challenge to be the triplet A = (a0,a1,a2) 
//and the rating for Bob's challenge to be the triplet B = (b0,b1,b2).

//Your task is to find their comparison scores by comparing a0 with b0, a1 with
//b1, and a2 with b2.

//If ai > bi, then Alice is awarded 1 point.
//If ai < bi, then Bob is awarded 1 point.
//If ai = bi, then neither person receives a point.

//Given A and B, can you compare the two challenges and print their respective comparison points?

//Input Format
//The first line contains 3 space-separated integers, a0, a1, and a2, describing the respective values in triplet A. 
//The second line contains 3 space-separated integers, b0, b1, and b2, describing the respective values in triplet B.

//Constraints
//1<=ai<=100
//1<=bi<=100

//Output Format
//Print two space-separated integers denoting the respective comparison scores earned by Alice and Bob.

//Sample Input
// 5 6 7
// 3 6 10

//Sampe Output
//1 1

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var alice = 0;
    var bob = 0;
    for (var i = 0; (i < a0_temp.length -1) || (i < b0_temp.length - 1); i ++) {
        if (a0_temp[i] > b0_temp[i]) {
            alice += 1;
        } else{
            bob += 1;
        };
    };
    console.log (alice + ' ' + bob);
};
