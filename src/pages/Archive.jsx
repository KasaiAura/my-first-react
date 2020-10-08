import React from 'react'
import { Heading } from "@chakra-ui/core";
import { TasksList } from '../components/Tasks';

const Archive = (props) => (
  <>
    <Heading as="h1" size="lg">Archive</Heading>
    <TasksList {...props} />
  </>
)

export default Archive