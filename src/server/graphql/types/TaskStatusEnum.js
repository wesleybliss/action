import {GraphQLEnumType} from 'graphql'
import {ACTIVE, DONE, FUTURE, STUCK} from 'universal/utils/constants'

const TaskStatusEnum = new GraphQLEnumType({
  name: 'TaskStatusEnum',
  description: 'The status of the task',
  values: {
    [ACTIVE]: {},
    [STUCK]: {},
    [DONE]: {},
    [FUTURE]: {}
  }
})

export default TaskStatusEnum
