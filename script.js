var container=document.createElement("div")
container.className=("container")
var row=document.createElement("div")
row.classList.add("row","m-3")
container.append(row)
var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>foo(data1))


function foo(data1)
{
    for(var i=0;i<data1.length;i++)
    {
     
        row.innerHTML+=`
        <div class ="col-md-4 ">
        
        <div class="card border-primary mb-3"  style="width: 18rem;">

        <div class="card text-center bg-info-subtle text-emphasis-danger">

        <div class="card-header">
        <h5 class="card-title">${data1[i].name.common}</h5>
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="">
        <div class="card-body">
        <h6>Capital:${data1[i].capital}</h6>
        <h6>Region:${data1[i].region}</h6>
        <h6>Contry Code:${data1[i].borders}</h6>
        <h6>Latlng:${data1[i].latlng}</h6>
        
          <a href="#" class="btn btn-secondary">Click for Weather</a>

        </div>
      </div>

  </div>
        
  
</div>
</div>

        `
document.body.append(container)
    }
}
