// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findFriend(str)
{
    let smallestName = str[0]; 
    for(let i=0;i<str.length;i++)
    {
       if(str[i].length<smallestName.length)
       {
        smallestName=str[i];
       }
    }
   return smallestName;
}
const smallest = findFriend(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(smallest);