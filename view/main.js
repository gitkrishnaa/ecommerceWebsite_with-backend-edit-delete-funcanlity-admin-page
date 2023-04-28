async function loadProducts(){
 
}
loadProducts()





fetch('http://localhost:4100/admin/get-all-product')
      .then(response => response.json())
      .then(json => {console.log(json)
    
    const display=document.getElementById("display_data")
    
    json.forEach(element => {

        const parent_div=document.createElement("div")
        display.appendChild(parent_div);
        parent_div.id="div"+element.id
        parent_div.style.width='150px';
        parent_div.style.display='flex';
        parent_div.style.justifyContent='center';
        parent_div.style.alignItems='center';
        parent_div.style.height='200px'
        parent_div.style.border='1px solid black'
        parent_div.style.margin='10px'

        const main_div=document.createElement("div")
        parent_div.appendChild(main_div)
        main_div.style.padding='2px'
        
      
        

        main_div.style.margin='10px'


         
        const image=document.createElement("div")
        main_div.appendChild(image)
        image.style.backgroundColor="#AE"+Math.trunc(Math.random()*10)+""+Math.trunc(Math.random()*10)+""+Math.trunc(Math.random()*10)+""+Math.trunc(Math.random()*10);
        image.style.width="100p%"
        image.style.height="100px"
        image.style.alignContent="center"
console.log(Math.trunc(Math.random()*10))

        const name=document.createElement("h3")
        main_div.appendChild(name)
        name.innerText=element.name;
        name.id="name"+element.id

        const price=document.createElement("p")
        main_div.appendChild(price)
        price.innerText=element.price;
        price.id="price"+element.id

        const details=document.createElement("p")
        main_div.appendChild(details)
        details.innerText=element.details;
        details.id="details"+element.id

        const delete_btn=document.createElement("button")
        main_div.appendChild(delete_btn)
        delete_btn.innerText="delete";
        delete_btn.id=element.id;
        delete_btn.style.width="60px"
        delete_btn.style.height="25px"

        delete_btn.style.backgroundColor="#FF5733"
        delete_btn.style.border="none"
        delete_btn.style.borderRadius="5px"
        delete_btn.style.margin="2px"

        delete_btn.addEventListener("click",(e)=>{
   console.log(e.target.id)

  //deleteing div in frotside when delete button clickes
  const delete_div=document.getElementById(`div${e.target.id}`);
  
  delete_div.style.display="none"
async function deleteByid(){
    const data= await axios.post("http://localhost:4100/admin/deleteProductById"+e.target.id+"")
   console.log(data)

}

deleteByid()



        })


        const edit_btn=document.createElement("button")
        main_div.appendChild(edit_btn)
        edit_btn.innerText="edit";
        edit_btn.id=element.id;
       
        edit_btn.style.width="60px"
        edit_btn.style.height="25px"
        edit_btn.style.backgroundColor="#08C7F5"
        edit_btn.style.border="none"
        edit_btn.style.borderRadius="5px"

        edit_btn.addEventListener("click",(e)=>{
            console.log(e.target.id)
const html_form_data=document.getElementById("product_form");

const product_id=document.getElementById("product_id");
product_id.value=e.target.id
html_form_data.setAttribute("action","http://localhost:4100/admin/edit-product/")

//fill previous data
const name=document.getElementById("name");
const price=document.getElementById("price");
const details=document.getElementById("details");
name.value=document.getElementById("name"+e.target.id).innerText;
price.value=document.getElementById("price"+e.target.id).innerText;

details.value=document.getElementById("details"+e.target.id).innerText;




//highlight edit product div
const highlight=document.getElementById(`div${e.target.id}`);
highlight.style.border="2px solid skyblue"

const editbutton_id=e.target.id
//cancel button
const data_field_div=document.getElementById("data_field");
const cancel_btn=document.createElement("button")
data_field_div.appendChild(cancel_btn)
cancel_btn.innerText="Cancel"
cancel_btn.addEventListener("click",()=>{
    highlight.style.border="1px solid black"
    html_form_data.setAttribute("action","http://localhost:4100/admin/add-product/")
    const name=document.getElementById("name");
const price=document.getElementById("price");
const details=document.getElementById("details");
name.value=""
price.value=""
details.value=""
submit_btn.innerText="add product";
    cancel_btn.remove()
        })


const submit_btn=document.getElementById(`submit_btn`);
submit_btn.innerText="edit product"
submit_btn.addEventListener("click",()=>{
    submit_btn.innerText="add product";
    
})



                 })


        

        
    });
    
    
    
    
    
    })

    // document.getElementsById("name").value="sample1"
    
    const pre_submit=document.getElementById("pre_submit")
    pre_submit.addEventListener("click",()=>{
        document.getElementById("name").value="sample"+Math.trunc(Math.random()*10)
       
        document.getElementById("price").value=`${Math.trunc(Math.random()*10000)}`
        document.getElementById("details").value="sample details"



    })