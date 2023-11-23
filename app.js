const product = [
    {
        id: 0,
        image: 'image/chococream.jpg',
        title: 'Chococream Bread',
        price: 5,
    },
   {
        id: 1,
        image: 'image/keju.jpg',
        title: 'Sweecheese Bread',
        price: 5,
    },
    {
        id: 2,
        image: 'image/berrybreeze.jpg',
        title: 'Berrybreeze Bread',
        price: 5,
    },
    {
        id: 3,
        image: 'image/vanilla.jpg',
        title: 'Heavanilla Bread',
        price: 5,
    },
    {
        id: 4,
        image: 'image/caffeinest.png',
        title: 'Coffee-Buns',
        price: 8,
    },
    {
        id: 5,
        image: 'image/cookies.jpg',
        title: 'Bar-Cookies!',
        price: 12,
    },
    {
        id: 6,
        image: 'image/plain.jpg',
        title: 'Plain Bread',
        price: 17,
    },
    {
        id: 7,
        image: 'image/sosis.jpg',
        title: 'Breadtoast!',
        price: 12,
    },
    {
        id: 8,
        image: 'image/ezekiel.jpg',
        title: 'Progain Eiwit Bread',
        price: 45,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}.000</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Tambahkan ke Keranjang</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Keranjang Rotimu Kosong!";
        document.getElementById("total").innerHTML = "Rp "+0+".000";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp "+total+".000";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price}.000</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}