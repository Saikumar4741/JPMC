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
  data.forEach(item=>
    {
        innerData+=`
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.branch}</td>
        <td><button onclick=updateData(${item.id})>Edit</button><button onclick=deleteData(${item.id})>Delete</button></td>
        </tr>`;
    }
  );
  table.innerHTML=innerData;
}
function addData()
{
    let id=document.querySelector("#id").value
    let name=document.querySelector("#name").value;
    let branch=document.querySelector("#branch").value;
    let response=fetch("http://localhost:3000/users",
    {
        method:"POST",
        body:JSON.stringify(
        {
           "id":id,
           "name":name,
           "branch":branch
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
function updateData(id)
{
    let name=document.querySelector("#name").value
    let branch=document.querySelector("#branch").value
    fetch(`http://localhost:3000/users/${id}`,
        {
            method:"PATCH",
            body: JSON.stringify(
                    {
                        "name":name,
                        "branch":branch
                    }
                )
        }
    )
}
function deleteData(id){
    fetch(`http://localhost:3000/users/${id}`,
    {
        method:"DELETE"
    })
}