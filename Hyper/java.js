var a="Web technology";//var is a global variable we can declare anywhere
     	var a=10;
     	console.log('the a value is:',a);
     	var a=50;
     	console.log(' after redeclaration, a value is:',a);
     	let b=20;//let is a local variable we cant redeclare but we can reassign the value to the variable
     	/*let b=30;//error->redeclaration is not possible
        b=30;*/
     	console.log(" B value is",b);//const is a local variable we cant redeclare and reassign
     	const rollnumber=12345;
     	/*rollnumber=987654;*///error(can't redeclare or reaasign)
     	console.log("rollnumber is" ,rollnumber);