const sampleTable = document.getElementById("sampleTable")
console.dir(sampleTable);

function insert_Row() {
    //Write your code here
	  sampleTable.innerHTML = `<tr>
	  <td>New Cell1</td>
	  <td>New Cell2</td>
	  </tr>` + sampleTable.innerHTML;
}
