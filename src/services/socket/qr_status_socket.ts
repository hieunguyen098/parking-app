import {io, Socket} from "socket.io-client";
import {ManagerOptions} from "socket.io-client/build/esm/manager";
import {SocketOptions} from "socket.io-client/build/esm/socket";

export const options: Partial<ManagerOptions & SocketOptions> = {
  path: "/prc/socket.io",
  transports: ["websocket"],
  rememberUpgrade: true,
  autoConnect: false
}

const namespace: string = "/qr-status"
const uri: string = "https://sparking.ngrok.app" + namespace

const socket = io(uri, options);

socket.on(
    'connect', () => {
      console.log('connect', socket.id)
    }
)

socket.on(
    'disconnect', () => {
      console.log('a socket disconnected')
    }
)

socket.on("setUp", (...args) => {
  console.log("Tham gia phòng", ...args)
})

socket.on("tearDown", (...args) => {
  console.log("Rời khỏi phòng", ...args)
})

export const joinRoom = (roomId: string) => {
  socket.emit("joinRoom", {
    roomId: roomId
  })
}

export const leaveRoom = (roomId: string) => {
  socket.emit("leaveRoom", {
    roomId: roomId
  })
}

export const setStatus = (setState: any, roomId: string) => {
  socket.on("statusListeners", (...args) => {
    const data = JSON.parse(args[0])
    console.log("nhan thong tin", data)
    console.log(data != null)
    console.log(data.returnCode, data.returnCode == 1)
    console.log(data.data, data.data.length)
    if (data && data.returnCode == 1 && data.data && data.data.length > 0) {
      const statusData = data.data[0]
      console.log("status data:", statusData)
      if (statusData.roomId == roomId) {
        setState({
          status: statusData.status,
          statusMessage: statusData.statusMessage
        })
      } else {
        setState({
          status: 0,
          statusMessage: "Thất bại"
        })
      }
    }
  })
}

export default socket;
