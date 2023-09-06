let cart = document.getElementById("cart");
let sumNode = document.getElementById("sum");
let buttonCurrent  = document.querySelectorAll("button");

buttonCurrent.forEach((item)=> {

    item.addEventListener("click", ()=> {

        let parent = item.parentNode.parentNode;
        let cloneNode = parent.cloneNode(true);
    
    
        let buttonClone = cloneNode.querySelector("button");
        buttonClone.innerText = "Xóa";
        buttonClone.setAttribute("onClick", "removeCart()");
    
        let inputCreate = document.createElement("input");
        inputCreate.setAttribute("type", "number");
        inputCreate.setAttribute("value", "1");
        inputCreate.setAttribute("name", "txtPrice");
        inputCreate.setAttribute("style", "margin-left: 8px;max-width: 38px; height: 32px");
        buttonClone.parentNode.appendChild(inputCreate);
        
    
        let cartNode = cart.getElementsByClassName('product-item');
    
    
        for (let index = 0; index < cartNode.length; index++) {
            const element = cartNode[index];
            
            let nameCart = element.querySelector('.sourse-content');
            let nameNode = parent.querySelector('.sourse-content');
    
            if(nameCart.innerHTML == nameNode.innerHTML){
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
            }
        }
    
        cart.appendChild(cloneNode);
    
    
        for (let index = 0; index < cartNode.length; index++) {
            const element = cartNode[index];
             
            element.setAttribute("onmouseover", "");
    
            let imgCurrent = element.querySelectorAll("img")[6];
            imgCurrent.setAttribute("style", "display: none");
    
            let elementInput = element.querySelector('input');
            let priceChild = element.getElementsByClassName("price-sourse");

            elementInput.addEventListener('change', () => {
                let value = elementInput.value;
                let sum = 0;
                
                if (value == 0) {
                    alert("Số lượng sản phẩm phải >= 1");
                    elementInput.value = 1;
                    return;
                }

                for (const item of priceChild) {
                    let price = +item.innerText.replace(".", "").replace("đ", "");
                    let thanhTien = price * value;
                    console.log(price);
                    console.log(value);
                    sum += thanhTien;
                }   
                sumNode.innerHTML = sum;

                
            })
            
        }
    
        sumCart();

    })

})

function removeCart() {
    let current = event.target;
    let children = current.parentNode.parentNode;
    cart.removeChild(children);
    sumCart();
}

function sumCart() {
    let sum = 0;
    
    let priceNode = cart.getElementsByClassName("price-sourse");
    
    for (const item of priceNode) {
        let price = +item.innerText.replace(".", "").replace("đ", "");
        sum += price;
    }
    sumNode.innerText = sum;
}