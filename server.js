let port = process.env.PORT
if (port == null || port == "") {
    port = 3000
}
async function g() {
    app.listen(port)
}