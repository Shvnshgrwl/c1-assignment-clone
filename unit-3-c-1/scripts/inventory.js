
var addedData = JSON.parse(localStorage.getItem("products"))
console.log(addedData)

addedData.map(function(elem,index){
    var box = document.createElement("div")
            
            var Imageurl = document.createElement("img")
            Imageurl.src = elem.Image
        
            var Type = document.createElement("p")
            Type.textContent = elem.Type;
        
            var Desc = document.createElement("p")
            Desc.textContent=elem.Desc
        
            var Price = document.createElement("p")
            Price.textContent = elem.Price;
        
            var btn = document.createElement("button")
            btn.setAttribute = "remove_product"
            btn.innerText = "Remove"
            btn.addEventListener("click",function(){
                removeItem(elem,index)
            })
            box.append(Imageurl,Type,Desc,Price,btn)
            document.querySelector("#all_products").append(box)
        })
        
        function removeItem(elem,index){
            console.log(elem.index)
            addedData.splice(index,1)
            console.log(addedData)
            localStorage.setItem("products",JSON.stringify(addedData))
            window.location.reload()
        }