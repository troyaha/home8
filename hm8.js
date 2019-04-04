let time = document.body.appendChild(
    document.createElement ( "p" )
)

var timer = 0
while ( timer++ < 100 ) {
    setTimeout (
        () => time.innerText = new Date().toLocaleString(),
        1000 * timer
    )
}



