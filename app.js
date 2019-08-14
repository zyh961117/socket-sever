const ws = require("nodejs-websocket")

const wsServer = ws.createServer((conn) => {
    console.log(conn.key + '  加入连接')
    conn.on("close", (code, reason) => {
        console.log(conn.key + '  断开连接')
    })
	conn.on('connect',res=>{
        console.log('连接成功')
	})
    conn.on('error', (err) => {
        console.log(err)
    })

}).listen(3000)