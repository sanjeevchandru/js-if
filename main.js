

// 1.Check the number is positive or negative

var num=20;
document.write("1.positive or not"+"<br>");
document.write("--------------------------------"+"<br>");
if(num>0)
{
	document.write(" It is a positive number"+"<br><br>");
}
else if(num==0)
	{
		document.write("This is a Zero"+"<br><br>");
	}
else
{
	document.write("it is a negative number"+"<br><br>");
}

	// 2.Check the number is Even or Odd
	
	var num=17;
	document.write("2.Even number or Odd Number"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(num%2==0)
	{
		document.write("This is a Even Number"+"<br><br>");
	}
	else
	{
		document.write("This is a Odd Number"+"<br><br>");
	}
	
	// 3.Check the number is Two digit number
	
	var num=0;
	document.write("3.Check two digit number or not"+"<br>");
	document.write("--------------------------------"+"<br>");
	if((num>9)&&(num<100))
	{
		document.write("this is a two digit number"+"<br><br>");
	}
	else if((num>=100)&&(num<1000))
	{
		document.write("this is three digit number"+"<br><br>");
	}
	else if(num==0)
	{
		document.write("This is a zero"+"<br><br>");
	}
	else
	{
		document.write("Exit"+"<br><br>");
	}
	
	
	// 4.Check the person is eligible for vote
	
	var age=17;
	document.write("4.Vote Validation"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(age>=18)
	{
		document.write("You are eligible for vote"+"<br><br>");
	}
	else
	{
		document.write("You are not eligible for vote"+"<br><br>");
	}
	
	// 5.Check the person is eligible for license
	
	var age=18;
	document.write("5.License Validation"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(age>=18)
	{
		document.write("You are aligible for license"+"<br><br>");
	}
	else
	{
		document.write("You are not eligible for license"+"<br><br>");
	}
	
	
	// 6. Check any two numbers are equal or grater than or less than
	
	var firstNumber=50;
	var secondNumber=100;
	document.write("6.Two Numbers are equal or not"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(firstNumber==secondNumber)
	{
		document.write("The two numbers are equal"+"<br><br>");
	}
	else if(firstNumber>secondNumber)
	{
		document.write("The first number is greater than"+"<br><br>");
	}
	else if(firstNumber<secondNumber)
	{
		document.write("the second number is greater than"+"<br><br>");
	}
	else
	{
		document.write("enter a valid number"+"<br><br>");
	}
	
	
	// 7. Check password is correct or not
	
	var password="San123";
	document.write("7.password is correct or not"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(password=="San123")
	{
		document.write("Your password is correct"+"<br><br>");
	}
	else
	{
		document.write("Please check,Your password is incorrect"+"<br><br>");
	}
	
	// 8. Check password length(8) is strong or weak..
	
	var password="San@13467";
	var	length=password.length;
	document.write("8.password is strong or not"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(length>=8)
	{
		document.write("Your password is strong"+"<br><br>");
	}
	else
	{
		document.write("Your password is week"+"<br><br>");
	}
	
	// 9. Student Grade 
		// Above 90--->Grade A
		// Above 80--->Grade B
		// Above 60--->Grade C
		// Above 40--->Grade D
		// less than 40--->Fail
		
	var mark=50;
	document.write("9.Student grade Checking"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(mark>=90)
	{
		document.write("Your Grade is 'A'"+"<br><br>");
	}		
	else if((mark<90)&&(mark>=80))
	{
		document.write("Your Grade is 'B'"+"<br><br>");
	}
	else if((mark<80)&&(mark>=60))	
	{
		document.write("Your Grade is 'C'"+"<br><br>");
	}
	else if((mark<60)&&(mark>=40))
	{
		document.write("Your Grade is 'D'"+"<br><br>");
	}
	else
	{
		document.write("You are fail"+"<br><br>");
	}
	
	// 10. Saving Amount:
		// below 2000 RS -->Basic mobile
		// upto 20000 rs----> Android Mobile
		// upto 50000 Rs --->iPad
		// above 50,000---> Apple
	
	var amount=1000;
	document.write("10.Saving Amount for you buy a mobile"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(amount<=2000)
	{
		document.write("Basic Mobile"+"<br><br>");
	}
	else if((amount>2000)&&(amount<=20000))
	{
		document.write("Android mobile"+"<br><br>");
	}
	else if((amount>20000)&&(amount<=50000))
	{
		document.write("iPad"+"<br><br>");
	}
	else if(amount>50000)
	{
		document.write("Apple"+"<br><br>");
	}
	else
	{
		document.write("Exit"+"<br><br>");
	}
	
	// 11. Marriage eligibility:
		// Male-- age is above 21
		// Female --Age is above 18
	
	var gender="female";
	var age=18;
	document.write("11.Marriage Eligibility"+"<br>");
	document.write("--------------------------------"+"<br>");
	if((gender=="Female")||(gender=="FEMALE")||(gender=="female"))
	{
		if(age>=18)
		{
			document.write("You are eligible for marriage"+"<br><br>");
		}
		else
		{
			document.write("You are not eligible for marriage"+"<br><br>");
		}
	}
	else if((gender=="Male")||(gender=="MALE")||(gender=="male"))
	{
		if(age>=21)
		{
			document.write("you are eligible for marriage"+"<br><br>");
		}
		else
		{
			document.writeg("You are not eligible for marriage"+"<br><br>");
		}
	}
	else
	{
		document.write("Please check the gender and age"+"<br><br>");
	}
	
	// 12. Check the given number is divisible by 6
	
	var a=00;
	document.write("12.The given number is divisible by 6"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(a%6==0)
	{
		document.write("It is devided by 6"+"<br><br>");
	}
	else
	{
		document.write("It is not divided by 6"+"<br><br>");
	}
	
	// 13. Find the largest between two numbers in JavaScript.
	
	var first=20;
	var second=70;
	document.write("13.Find the largest number between two numbers"+"<br>");
	document.write("--------------------------------"+"<br>");
	if(first>second)
	{
		document.write("First number is largest"+"<br><br>");
	}
	else{
		document.write("Second Number is largest"+"<br><br>");
	}
	
	// 14.Find the largest of three numbers in JavaScript.
	
	var first=10;
	var second=30;
	var third=100;
	document.write("14.Find the largest of three numbers "+"<br>");
	document.write("--------------------------------"+"<br>");
	if((first>second)&&(first>third))
	{
		document.write("first number is largest number"+"<br><br>");
	}
	else if((second>first)&&(second>third))
	{
		document.write("second number is largest number"+"<br><br>");
	}
	else{
		document.write("third number is largest number"+"<br><br>");
	}
	
	// 15. Ascending order of THREE numbers.
	
	var a=40,b=40,c=40;
	document.write("15.Ascending order of THREE numbers"+"<br>");
	document.write("--------------------------------"+"<br>");
	if((a<=b)&&(a<=c))
	{
		if(b<=c)
		{
			document.write(a,b,c+"<br><br>");
		}
		else
		{
			document.write(a,c,b+"<br><br>");
		}
	}
	else if((b<=a)&&(b<=c))
	{
		if(c<=a)
		{
			document.write(b,c,a+"<br><br>");
		}
		else
		{
			document.write(b,a,c+"<br><br>");
		}
	}
	else if((c<=a)&&(c<=b))
	{
		if(a<=b)
		{
			document.write(c,a,b+"<br><br>");
		}
		else
		{
			document.write(c,b,a+"<br><br>");
		}
	}
	else
	{
		document.write("enter different number for a,b and c"+"<br>");
	}
	
	// 16. Decending order of THREE numbers.
	
	var a=15,b=0,c=32;
	document.write("16.Decending order of THREE numbers"+"<br>");
	document.write("--------------------------------"+"<br>");
	if((a>=b)&&(a>=c))
	{
		if(b>=c)
		{
			document.write(a,b,c+"<br><br>");
		}
		else
		{
			document.write(a,c,b+"<br><br>");
		}
	}
	else if((b>=a)&&(b>=c))
	{
		if(c>=a)
		{
			document.write(b,c,a+"<br><br>");
		}
		else
		{
			document.write(b,a,c+"<br><br>");
		}
	}
	else if((c>=a)&&(c>=b))
	{
		if(a>=b)
		{
			document.write(c,a,b+"<br><br>");
		}
		else
		{
			document.write(c,b,a+"<br><br>");
		}
	}
	else
	{
		document.write("exit"+"<br><br>");
	}

	
	
	
	