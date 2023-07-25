var arrlengh=prompt("Enter The Lenght Of Array");
var a=[];
for (let i=0;i<arrlengh;i++){
a[i]=prompt("Enter The"+(i+1)+"Value");

}
document.write("a="+a+"<br>"+"<br>");
var arrlengh=parseInt(prompt("Enter the length of array"));
var b=[];
for (let i=0;i<arrlengh;i++){
	b[i]=prompt("Enter the "+(i+1)+"Value");
	
}
document.write("b="+b+"<br>"+"<br>");
a.push(b);
document.write("Combine Two Array is"+a);
console.log(a);