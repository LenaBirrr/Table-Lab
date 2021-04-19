function highlightLine(numberOfLine)
{
	for(let i=0;i<4;i++)
		table.rows[numberOfLine].cells[i].style.backgroundColor = "yellow";
}
 
function getFilteredLines()
{
	
	for(let i=0;i<4;i++)
	{
		let filter = document.getElementById(arrOfFilters[i]);
		if(filter.value!="")
		{
			for(let j=1;j<6;j++)     
			{	
				if(table.rows[j].cells[i].innerHTML!=filter.value)
					arrOfSuitableLines[j]=false;
			}
		}	
	}
}


function arrDefault()
{
	for(let i=1;i<6;i++)
	arrOfSuitableLines[i]=true;
}

function dehighlightLines()
{
	for(let i=1;i<6;i++)
		for(let j=0;j<4;j++)
			table.rows[i].cells[j].style.backgroundColor = "";
}

function filterLines()
{
	arrDefault();
	dehighlightLines();
	getFilteredLines();
	for(let i=1;i<6;i++)
		if(arrOfSuitableLines[i])
			highlightLine(i);
		
}






let arrOfSuitableLines =[];
let arrOfFilters=[];

arrOfFilters[0]="name_filter";
arrOfFilters[1]="yearOfWriting_filter";
arrOfFilters[2]="yearOfPublishing_filter";
arrOfFilters[3]="numberOfBooks_filter";
	


let table=document.body.firstElementChild;

dehighlightLines();
arrDefault();
table.rows[0].cells[0].setAttribute('onclick','sort(0)');
table.rows[0].cells[1].setAttribute('onclick','sort(1)');
table.rows[0].cells[2].setAttribute('onclick','sort(2)');
table.rows[0].cells[3].setAttribute('onclick','sort(3)');


document.getElementById("button").onclick=filterLines;


