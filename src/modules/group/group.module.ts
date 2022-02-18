import { Module } from '@nestjs/common'
import { GroupService } from './group.service'
import { GroupController } from './group.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import JwtStrategy from '../../strategies/jwt.strategy'

import { UserAccountEntity } from '../../entities/UserAccount.entity'
import { UserProfileEntity } from '../../entities/UserProfile.entity'
import { GroupEntity } from '../../entities/Group.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserAccountEntity,
      UserProfileEntity,
      GroupEntity,
    ]),
  ],
  providers: [GroupService, JwtStrategy],
  controllers: [GroupController],
})
export class GroupModule {}
