window.onload = function() {
const bodyElement=document.getElementsByTagName("section")[0]

const loding = true
    fetch('res/json/postsData.json')
        .then((response) => response.json())
        .then((posts) => {

    // Postitituse lisamine

    for (let post of posts){
        //console.log(post)
        const div = document.createElement('div')
        div.classList.add('post')

        const timestamp = document.createElement('dates')
        timestamp.textContent = post.timestamp

        const h3 = document.createElement('h3')
        h3.textContent = post.title

        const p = document.createElement('p')
        p.textContent = post.body
        
        var img = document.createElement("img")
        img.src = post.postPicture
        //var src = document.getElementById("header")

        var imgMe = document.createElement("img")
        imgMe.src = post.me

        div.appendChild(timestamp)
        div.appendChild(h3)
        div.appendChild(imgMe)
        div.appendChild(img)

        div.appendChild(p)
        bodyElement.appendChild(div)





    } // for

})//.then post



}//window.onload
