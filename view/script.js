

document.addEventListener('DOMContentLoaded',function(){
    loadHTMLTable([])
  })
  
  function loadHTMLTable(data){
    const table=document.querySelector('table tbody')
    if(data.length===0){
      table.innerHTML="<tr><td class='not-data' colspan='4'>No Data</td></tr>";
    }
  
  }
  
  
  

  