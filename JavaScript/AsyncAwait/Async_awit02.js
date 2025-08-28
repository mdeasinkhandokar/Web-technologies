function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data fetched")
        },2000);
    })
}


function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Coment data ferched .")
        },3000);
    })
}


async function getBlogData(){
try{
    console.log("Fetching blog data");
    // const blogData= await fetchPostData();
    // const commentData= await fetchCommentData();
    // console.log("fetch complete");
    // console.log(blogData);
    // console.log(commentData);

    const [postData, commentData]= await Promise.all([
        fetchPostData(), 
        fetchCommentData(),

    ]);
    console.log(postData);
    console.log(commentData);

}catch(error){
    console.error("Error fetching blog data", error);
}


}

getBlogData();