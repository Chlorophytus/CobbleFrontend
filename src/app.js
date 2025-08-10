import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

function initializeVideos() {
    return [...Array(12).keys()].map((index) => {
        let newVideo = document.createElement("div")
        newVideo.className = "bg-white w-96 h-88 m-8 rounded-xl shadow-lg"

        let newThumb = document.createElement("div")
        newThumb.className = "rounded-xl shadow-lg w-80 h-45 m-8 bg-zinc-100"
        newVideo.appendChild(newThumb)

        let newTitle = document.createElement("h3")
        newTitle.innerText = `Test video ${index}`
        newTitle.className = "text-2xl px-10"
        newVideo.appendChild(newTitle)

        let newUploadUser = document.createElement("p")
        newUploadUser.innerText = `by test`
        newUploadUser.className = "px-10"
        newVideo.appendChild(newUploadUser)

        let newUploadDate = document.createElement("p")
        newUploadDate.innerText = `on test`
        newUploadDate.className = "px-10"
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