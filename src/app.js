import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

const API_ENDPOINT = "http://192.168.88.10:8080/"

function initializeVideos(videos) {
    return videos.map((video) => {
        let newVideo = document.createElement("div")
        newVideo.className = "xl:m-8 xl:w-96 xl:h-88 bg-white w-70 h-70 m-2 rounded-xl shadow-lg"

        let newThumb = document.createElement("div")
        newThumb.className = "xl:w-80 xl:h-45 xl:m-8 rounded-xl w-56 h-32 shadow-lg m-6 bg-zinc-100"
        newVideo.appendChild(newThumb)

        let newTitle = document.createElement("h3")
        newTitle.innerText = video.title
        newTitle.className = "xl:text-2xl text-xl px-10"
        newVideo.appendChild(newTitle)

        let newUploadUser = document.createElement("p")
        newUploadUser.innerText = `by ${video.uploader}`
        newUploadUser.className = "xl:text-lg text-sm px-10"
        newVideo.appendChild(newUploadUser)

        let newUploadDate = document.createElement("p")
        newUploadDate.innerText = `on ${video.date}`
        newUploadDate.className = "xl:text-lg text-sm px-10"
        newVideo.appendChild(newUploadDate)

        return newVideo;
    })
}

function initializePage() {
    fetch(new URL("/page", API_ENDPOINT)).then((result) => {
        return result.json()
    }).then((json) => {
        if (json.ok) {
            initializeVideos(json.videos).forEach((video) => { document.getElementById("videos").appendChild(video) })
            document.getElementById("version").innerText = `Backend v${json.version.readable} | Handled in ${json.responseTime}ms`
        }
    })
}

initializePage()