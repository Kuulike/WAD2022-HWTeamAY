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
        div.className = 'post'

        const div2 = document.createElement('div')
        div2.className ='postinfo'
        const div3 = document.createElement('div')
        
        div3.className = 'poster-logo'
        const img = document.createElement('img')
        img.src = post.me

        const timestamp = document.createElement('p')
        timestamp.innerText = post.timestamp

        const div4 = document.createElement('div')
        div4.className = 'post-text'
        div4.innerText = post.body

        const div5 = document.createElement('div')
        const img2 = document.createElement('img')
        div5.className = 'post-picture'
        img2.src= post.postPicture

        div.appendChild(div2)
        div2.appendChild(div3)
        div2.appendChild(timestamp)
        div3.appendChild(img)
        div.appendChild(div4)
        div.appendChild(div5)
        div5.appendChild(img2)



        bodyElement.appendChild(div)





    } // for

})//.then post



}//window.onload
