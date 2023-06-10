import React from "react";
class Filter extends React.Component{
    constructor(){
        super();
        this.state={
            filterCategory:"Fruits",
            product:[
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/rich%20may%20peach%20.png",
                    category:"Fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/summer%20sweet%20peach.png",
                    category:"Fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/white-peach%20.png",
                    category:"Fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/peach%20flat.png",
                    category:"Fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/Icontomato4733.jpg",
                    category:"Vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/IconBasilica2159.jpg",
                    category:"Vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/IconGarlic460.jpg",
                    category:"Vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/IconDill152.jpg",
                    category:"Vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/IconDried%20apricot218.jpg",
                    category:"Dried fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/IconNutt2432.jpg",
                    category:"Dried fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/IconWalnut2552.jpg",
                    category:"Dried fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/Icondried%20apple3124.jpg",
                    category:"Dried fruits"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/Icondried%20spinach3521.jpg",
                    category:"Dried vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/Icondried%20dill2726.jpg",
                    category:"Dried vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/Icondried%20mint324.jpg",
                    category:"Dried vegetables"
                },
                {
                    photo:"http://ecoharvest.farm/img/NewCategory/Icondried%20parsley2843.jpg",
                    category:"Dried vegetables"
                },
            ]
        }
    }
    Change=(category)=>{
        this.setState({filterCategory:category})
    }
    render(){
        let newArr=this.state.product.filter(x=>x.category===this.state.filterCategory);
       console.log(newArr)
        
        return(
        <div>
            <ul style={{display:"flex",justifyContent:"space-around"}}>
                <li onClick={()=>this.Change('Fruits')} style={{listStyleType:"none",fontWeight:"700"}}>Fruits</li>
                <li onClick={()=>this.Change('Vegetables')} style={{listStyleType:"none",fontWeight:"700"}}>Vegetables</li>
                <li onClick={()=>this.Change('Dried fruits')} style={{listStyleType:"none",fontWeight:"700"}}>Dried fruits</li>
                <li onClick={()=>this.Change('Dried vegetables')} style={{listStyleType:"none",fontWeight:"700"}}>Dried vegetables</li>
            </ul>

            <ul style={{display:"flex",justifyContent:"space-around"}}>
            {newArr.map((n,i)=>{
    return(
        <li key={i} style={{width:"300px",height:"300px",listStyle:"none"}}>
        <img style={{width:"100%"}} src={n.photo}alt="..."/>
        </li>
    )
})}

            </ul>

        </div>

        )
    }
}

export default Filter; 