import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm'
import { UserProfileEntity } from './UserProfile.entity'

@Entity('friend')
export class FriendMessageEntity {
  // 消息数据库id
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  sender_id: string

  @OneToOne(() => UserProfileEntity)
  sender_profile: UserProfileEntity

  @Column()
  receiver: string

  @OneToOne(() => UserProfileEntity)
  receiver_profile: UserProfileEntity

  @CreateDateColumn()
  create_at: Date
}
