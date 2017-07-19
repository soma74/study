const abc = 1;
function sum(a, b)
{
	return a + b;
}

function product(a, b) 
{
	if(Number.isInteger(a))
	{
		return a * b;
	}
	else 
		return 0;
}

export { product, sum};