let addPost=async()=>{
    let id=document.getElementById("id").value;
    let title=document.getElementById("title").value;
    let name=document.getElementById("author").value;


    let send_this_data={
        id:+id,
        title:title,
        name:name,
    };
    let res=await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        
        body:JSON.stringify(send_this_data),

        headers:{
            "Content-Type":"application/json",
        },
    })
    
    let data=await res.json();
    console.log(data);

}



let deletePost=async()=>{
    let id=document.getElementById("delete_id").value;
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
        method:"DELETE",

        
        headers:{
            "Content-Type":"application/json",
        },
    })

    let data=await res.json();
    console.log("data",data); 
}


let updatePost=async()=>{
    let id=document.getElementById("update_id").value;
    let title=document.getElementById("update_title").value;

    let send_data={
        title,
    }

    let res=await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PATCH",


        body:JSON.stringify(send_data),

        headers:{
            "Content-Type":"application/json",
        }
    });

    let data=await res.json();

    console.log(data);
}



let replacePost=async()=>{
    let id=document.getElementById("replace_id").value;
    let title=document.getElementById("replace_title").value;

    let send_data={
        title,
    }

    let res=await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PUT",


        body:JSON.stringify(send_data),

        headers:{
            "Content-Type":"application/json",
        }
    });

    let data=await res.json();

    console.log(data);
}