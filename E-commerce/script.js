function getData()
{
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(res=>createTable(res))
}
function createTable(data)
{
  let table=document.querySelector("#userdata");
  let innerData="";
  var totaldata=0;
  data.forEach(item=>
    {
        innerData+=`
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button onclick=updateData(${item.id})>Edit</button><button onclick=deleteData(${item.id})>Delete</button></td>
        </tr>`;
        totaldata+=parseInt(item.price);
    }
  );
  document.getElementById("tp").innerHTML=totaldata;
  table.innerHTML=innerData;
}
function addData(id,name,price)
{
    let response=fetch("http://localhost:3000/users",
    {
        method:"POST",
        body:JSON.stringify(
        {
           "id":id,
           "name":name,
           "price":price
        })
    })
    if(response.ok)
        {
        Event.preventDefault();
          getData()
        }
        else{
            console.warn("failed to add data",response.statusText)
        }
}

function deleteData(id){
    fetch(`http://localhost:3000/users/${id}`,
    {
        method:"DELETE"
    })
}