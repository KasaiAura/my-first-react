import React from 'react'
import { Heading } from "@chakra-ui/core";
import { AddTaskModal, TasksList } from '../components/Tasks';


const ToDo = (props) => (
  <>
    <Heading as="h1" size="lg">To Do</Heading>
    <AddTaskModal handleCreate={props.handleCreate} />
    <TasksList {...props} />
  </>
)

export default ToDo