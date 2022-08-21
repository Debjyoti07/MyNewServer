let getData=async()=>{
    let url=`https://my-json-server.typicode.com/Debjyoti07/MyNewServer/posts`;

    let res=await fetch(url);

    let data=await res.json();

    console.log(data);
    append(data);
}

getData();


let append=(data)=>{

    let container=document.getElementById("container");
    container.innerHTML="";
    data.forEach(({image,name})=>{
        let img=document.createElement("img");
        img.src=image;
        let nam=document.createElement("h3");
        nam.innerText=name;
        let div=document.createElement("div");
        div.append(img,nam);
        container.append(div);

    })
}