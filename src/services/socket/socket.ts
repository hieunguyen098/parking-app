import {io} from "socket.io-client";
import {ManagerOptions} from "socket.io-client/build/esm/manager";
import {SocketOptions} from "socket.io-client/build/esm/socket";

const options: Partial<ManagerOptions & SocketOptions> = {
  path: "/prc/socket.io",
  transports: ["websocket"],
  rememberUpgrade: true
}
const namespace = "/test"
const socket = io("https://sparking.ngrok.app" + namespace, options)

socket.on(
    'connect', () => {
      console.log('connect', socket.id)
    }
)

socket.on('disconnect', () => {
  console.log('disconnect', socket.id)
})
