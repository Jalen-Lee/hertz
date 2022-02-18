import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Unique,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { UserAccountEntity } from './UserAccount.entity'
import { GroupEntity } from './Group.entity'

enum GENDER {
  MALE = 0,
  FEMALE = 1,
  NULL = 2,
}

@Entity()
export class UserProfileEntity {
  // 数据库id
  @PrimaryGeneratedColumn('uuid')
  id: string

  // 用户名
  @Column()
  username: string

  // 头像
  @Column({ default: 'example.jpg' })
  avatar: string

  // 个性签名
  @Column({ default: '这个人很懒，啥也没写~' })
  description: string

  // 邮箱
  @Column()
  email: string

  // 性别
  @Column({ default: GENDER.NULL })
  gender: GENDER

  @OneToOne(() => UserAccountEntity, (account) => account.profile)
  account: UserAccountEntity

  @ManyToMany(() => GroupEntity, (groups) => groups.attendees, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  groups: GroupEntity[]
}
