//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",submitFunction)
var data = JSON.parse(localStorage.getItem("products"))||[]
console.log(data)

function ProductData(T,D,P,I){
    this.Type = T;
    this.Desc = D;
    this.Price = P;
    this.Image = I;
}
function submitFunction(){
    event.preventDefault()
    
    var Type = document.querySelector("#type").value;
    var Desc = document.querySelector("#desc").value;
    var Price = document.querySelector("#price").value;
    var Image = document.querySelector("#image").value;

    var dataobj = new ProductData(Type,Desc,Price,Image)
    data.push(dataobj)
    // console.log(type,desc,price,image)
    
    localStorage.setItem("products",JSON.stringify(data));
    alert("data added")
    Type.value = "";
    Desc.value = "";
    Price.value = "";
    Image.value = "";
    // window.location.reload()
}

// data.map(function(elem,index){
//     var box = document.createElement("div")
//     box.setAttribute("class","box1")
//     var image = document.createElement("img")
//     image.src = elem.image

//     var type = document.createElement("p")
//     type.textContent = elem.type;

//     var desc = document.createElement("p")
//     desc.textContent=elem.desc

//     var price = document.createElement("p")
//     price.textContent = elem.price;

//     var btn = document.createElement("button")
//     btn.setAttribute = "remove_product"
//     btn.innerText = "Remove"
//     btn.addEventListener("click",function(){
//         removeItem(elem,index)
//     })
//     box.append(image,type,desc,price,btn)
//     document.querySelector("#display".append(box))
// })

// function removeItem(elem,index){
//     console.log(elem.index)
//     data.splice(index,1)
//     console.log(data)
// }