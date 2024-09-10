// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(num)
{
    let lowest=num[0];
    for(let i=0;i<num.length;i++)
    {
        if(num[i]<lowest)
        {
            lowest=num[i];
        }

    }
    return lowest;

}
const low = lowestNumber([167,190,120,165,137])
console.log(low);
