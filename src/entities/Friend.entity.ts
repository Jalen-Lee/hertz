import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm'
import { UserProfileEntity } from './UserProfile.entity'

@Entity('friend')
export class FriendEntity {
  // 好友数据库id
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  friend_uid: string

  @OneToOne(() => UserProfileEntity)
  friend_profile: UserProfileEntity

  @Column()
  owner_id: string

  @CreateDateColumn()
  create_at: Date
}
