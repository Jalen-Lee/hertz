import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { GroupService } from './group.service'

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('create')
  async createGroup(@Body() body: any): Promise<any> {
    return this.groupService.createGroup(body)
  }

  @Get('attendees')
  async getAttendees(@Query() query: any): Promise<any> {
    const { groupId } = query
    return this.groupService.getAttendees(groupId)
  }
}
