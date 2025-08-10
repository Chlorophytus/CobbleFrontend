import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

function initializeVideos() {
    return [...Array(16).keys()].map((index) => {
        let newVideo = document.createElement("div")
        newVideo.className = "xl:m-8 xl:w-96 xl:h-88 bg-white w-70 h-70 m-2 rounded-xl shadow-lg"

        let newThumb = document.createElement("div")
        newThumb.className = "xl:w-80 xl:h-45 xl:m-8 rounded-xl w-56 h-32 shadow-lg m-6 bg-zinc-100"
        newVideo.appendChild(newThumb)

        let newTitle = document.createElement("h3")
        newTitle.innerText = `Test video ${index}`
        newTitle.className = "xl:text-2xl text-xl px-10"
        newVideo.appendChild(newTitle)

        let newUploadUser = document.createElement("p")
        newUploadUser.innerText = `by test`
        newUploadUser.className = "xl:text-lg text-sm px-10"
        newVideo.appendChild(newUploadUser)

        let newUploadDate = document.createElement("p")
        newUploadDate.innerText = `on test`
        newUploadDate.className = "xl:text-lg text-sm px-10"
        newVideo.appendChild(newUploadDate)

        return newVideo;
    })
}

initializeVideos().forEach((video) => {document.getElementById("videos").appendChild(video)})

// postcss().process(css, {parser: postcssJs }).then((result) => {
//     let style = document.createElement('style')
//     style.innerText = result.css
//     document.getElementById("videos").appendChild(style)
// })