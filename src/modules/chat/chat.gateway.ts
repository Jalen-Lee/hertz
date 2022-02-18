import {
  ConnectedSocket,
  WebSocketServer,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'

import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Server, Socket } from 'socket.io'
import { UserProfileEntity } from '../../entities/UserProfile.entity'
import { UserAccountEntity } from '../../entities/UserAccount.entity'
import { GroupEntity } from '../../entities/Group.entity'

@WebSocketGateway({
  namespace: 'hertz-ws-qa',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server

  defaultGroupChat: string

  constructor(
    @InjectRepository(UserProfileEntity)
    private profileRepo: Repository<UserProfileEntity>,
    @InjectRepository(UserAccountEntity)
    private accountRepo: Repository<UserAccountEntity>,
    @InjectRepository(GroupEntity)
    private groupRepo: Repository<GroupEntity>,
  ) {
    this.defaultGroupChat = 'Hertz交流群'
  }

  afterInit(server: Server) {

    // console.log('webSocket网关初始化', server)
    server.use((socket, next) => {
      next()
    })
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`客户端${client.id}已连接`)
    // const { uid } = client.handshake.auth.userInfo
    // // 用户加入公共聊天室
    // client.join(this.defaultGroupChat)
    // // 加入自己的房间
    // client.join(uid)
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`客户端${client.id}已断开连接`)
  }
}
