window.onload = function() {
const bodyElement=document.getElementsByTagName("section")[0]

const loding = true
    fetch('res/json/postsData.json')
    // web source
    //fetch('https://api.npoint.io/8d84f0a8be48c62ba619')

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

        const div6 = document.createElement('div')
        const img3 = document.createElement('img')
        div6.className = 'post-likes'
        img3.src = post.like

        div.appendChild(div2)
        div2.appendChild(div3)
        div2.appendChild(timestamp)
        div3.appendChild(img)
        div.appendChild(div5)
        div.appendChild(div4)
        div5.appendChild(img2)
        div.appendChild(div6)
        div6.appendChild(img3)



        bodyElement.appendChild(div)





    } // for

})//.then post



}//window.onload
