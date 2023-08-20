const product = [

    {
        Id: 0,
        image:"https://cdn.dxomark.com/wp-content/uploads/medias/post-45678/galaxy-z-flip-by-samsung.png",
        title:'z flip foldable mobile',
        price:120
    },
    {
        id:1,
        image:'https://cdn1.smartprix.com/rx-im0eUoAyl-w420-h420/apple-airpods-pro.jpg',
        title:'air pods pro',
        price:30
    },
    {
        id:2,
        image:'https://camerajabber.com/wp-content/uploads/2019/07/Canon_250D_p1012927.jpg',
        title:'250D DSLR camera',
        price:150
    },
    {
        id:3,
        image:'https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary%20tout-mobile-1534x1083?$toutMobile$&fmt=png-alpha',
        title:'Head Phone',
        price:60
    }
];

const categoeries = [...new Set(product.map((item)=>{
    return item
}))]

let i = 0;
document.getElementById('root').innerHTML = categoeries.map((item)=>{
    var {image,title,price} = item
    return(
        `<div class='box'>
            <div class='img_box'>
                <img class='image' src='${image}'></img>
            </div>
            <div class='bottom'>
             <p>${title}</p>
             <h2> $ ${price}.00</h2>` + 
             "<button onClick='addtocart("+(i++)+")'>Add To Cart</button>"+
            `</div>
        </div>`
        
    )
}).join(' ')

var cart = [];

function addtocart(a){
    cart.push({...categoeries[a]});
    displaycart()
}

function delElement(a){
    cart.splice(a, 1);
    displaycart()
}

function displaycart(){
    let j = 0, total= 0;
    document.getElementById('count').innerHTML=cart.length
    if(cart.length===0){
        document.getElementById('cartItem').innerHTML='Your Cart Is Empty'
        document.getElementById('total').innerHTML="$"+0+".00"
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((item)=>{
            var {image, title, price} = item;
            total = total + price;
            document.getElementById('total').innerHTML="$"+total+".00";
            return(
                `<div class="cart_item">
                   <div class='row_img'>
                        <img class='rowing' src=${image}>
                   </div>
                   <p style='font-size:12px;'>${title}</p>
                   <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                   "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                
            )
        }).join(' ')
    }
}