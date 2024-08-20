function createLink(name, description, target) {

    let page = document.createElement("div")
    page.classList = "page"

    let label = document.createElement("label")
    label.innerHTML = name
    label.classList = "text"
    label.id        = "pagelabel"
    
    let desc = document.createElement("div")
    desc.innerHTML = description
    desc.classList = "text"
    desc.id        = "pagedescription"

    page.appendChild(label)
    page.appendChild(desc)
    

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("pageslist").appendChild(page)
    })

    //<div class="page">
    //<label class="text" id="pagelabel">Template Name</label>
    //
    // <div class="text" id="pagedescription">
    //    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    // </div>
    //</div>

    // So links can exist without being functional
    if (target == "NONE") {
        return
    }

    page.addEventListener("click", function() {
        window.open(target, "_self")
    })
}

createLink("🔓 YT", "YouTube \"desbloqueado\" ", "/YT/")
createLink("...", "...", "NONE")