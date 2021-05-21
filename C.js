function swapLines(first, second)
{
	let newrow=table.insertRow(first);
	let subrow=table.rows[second+1];
	
    let name = newrow.insertCell(0);
    name.innerHTML=subrow.cells[0].innerHTML;
	
	let yearOfWriting = newrow.insertCell(1);	
    yearOfWriting.innerHTML=subrow.cells[1].innerHTML;
	
	let yearOfPublishing = newrow.insertCell(2);
    yearOfPublishing.innerHTML=subrow.cells[2].innerHTML;
	
	let numberOfBooks = newrow.insertCell(3);
    numberOfBooks.innerHTML=subrow.cells[3].innerHTML;
	

   table.deleteRow(second+1);


}

function sort(numberOfColumn)
{
	
	for(let i=1;i<6;i++)     
	{		
		for(let j=i;j>1;j--) 
		{
			let row1=table.rows[j-1];
			let row2=table.rows[j];
			let OK;
			if(numberOfColumn==0)
			{
				OK=row1.cells[numberOfColumn].innerHTML>row2.cells[numberOfColumn].innerHTML
			}
			else
			{
				OK=+row1.cells[numberOfColumn].innerHTML>+row2.cells[numberOfColumn].innerHTML;
			}
			if(OK)
			{				
				swapLines(j-1,j);				
			}
		}
	}
}

let table=document.body.firstElementChild;

nameOfBook.addEventListener("click", function(){ sort(0); });
yearOfEnd.addEventListener("click", function(){ sort(1); });
yearOfPublishing.addEventListener("click", function(){ sort(2); });
numberOfBook.addEventListener("click", function(){ sort(3); });
