function fact(n)
{
    if(n==1)
        {
            return "Mittu";
        }
    else
    { 
        return fact(n-1)*n;
    }
}
module.exports.fact=fact