import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  Unique,
} from 'typeorm'

import { nanoid } from 'nanoid'

const globalPrefix = 'http://localhost:9527/static/avatar/'
const avatars = [
  `${globalPrefix}avatar-1.png`,
  `${globalPrefix}avatar-2.png`,
  `${globalPrefix}avatar-3.png`,
  `${globalPrefix}avatar-4.png`,
  `${globalPrefix}avatar-5.png`,
  `${globalPrefix}avatar-6.png`,
  `${globalPrefix}avatar-7.png`,
  `${globalPrefix}avatar-8.png`,
  `${globalPrefix}avatar-9.png`,
  `${globalPrefix}avatar-10.png`,
  `${globalPrefix}avatar-11.png`,
  `${globalPrefix}avatar-12.png`,
]

function randomAvatar() {
  const index = parseInt(String(Math.random() * 12), 10)
  return avatars[index]
}

@Entity()
@Unique(['username'])
export default class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string

  @Column({ default: `用户${nanoid(15)}` })
  username: string

  @Column({ default: '123456', select: false })
  password: string

  @Column({ default: randomAvatar() })
  avatar: string

  @CreateDateColumn()
  createdDate: Date

  @Column({ default: 'user' })
  role: string
}
