var product = [ 
    {name:"Bus Lighter", price: "1700", headline:"Space Time", image: "https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Teddy", price: "1500", headline:"Soft Soft", image: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Minion", price: "1200", headline:"No 001", image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

];

var popular = [ 
    {name:"Train", price: "2100", headline:"Traval Time", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Car", price: "4000", headline:"Go Race", image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Minion", price: "1200", headline:"No 001", image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

];


var cart = [];


function addProduct(){
    
    clutter = "";
    product.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class= " w-full h-full object-cover " src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                <i data-index="${index}" class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
    })

    document.querySelector(".products").innerHTML = clutter;
}


function addPopularProducts(){
    clutter ="";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
}


function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
           cart.push(product[details.target.dataset.index]);
        };
    })
}


// function showCart(){
//     document.querySelector(".carticon")
//     .addEventListener("click", function(){
//         document.querySelector(".cartexpnd").style.display = "block";
    

//     var clutter = "";
//     cart.forEach(function(prod, index) {

//         clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
//         <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
//             <img src="${prod.image}" />
//         </div>
//         <div>
//         <h3 class="font-semibold">${prod.name}</h3>
//         <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
//         </div>
//         </div>`;
    
//         });
        
//         document.querySelector(".cartexpnd")
//         .innerHTML = clutter;  

//     });
// }
function showCart() {
    document.querySelector(".carticon").addEventListener("click", function() {
        const cartContainer = document.querySelector(".cartexpnd");
        
        // Toggle cart visibility
        if (cartContainer.style.display === "block") {
            cartContainer.style.display = "none"; // Hide cart if already visible
        } else {
            cartContainer.style.display = "block"; // Show cart if hidden

            // Render cart items only when the cart is shown
            let clutter = "";
            cart.forEach(function(prod) {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                        <img src="${prod.image}" />
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>`;
            });
            
            cartContainer.innerHTML = clutter;
        }
    });
}



showCart();
addToCart();
addProduct();
addPopularProducts();
