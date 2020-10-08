import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    List,
    ListItem,
    Flex,
    IconButton
  } from "@chakra-ui/core";

const AddTaskModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formSubmit = e => {
      e.preventDefault()
      props.handleCreate(document.getElementById("task").value)
      onClose()
    }

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={formSubmit}>
                <ModalBody>
                    <FormControl>
                        <FormLabel htmlFor="task">New Task</FormLabel>
                        <Input type="task" id="task" aria-describedby="add a task" />
                    </FormControl>
                </ModalBody>

                <ModalFooter>     
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button variantColor="blue" ml={3} type="submit">
                        Add
                    </Button>
                </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    );
};

const TasksList = props => (
  <List mt={2} minW={400} spacing={1}>
      {props.todo.map((val, i) => 
      <ListItem p={2} border='1px' borderRadius='md' borderColor='gray.400'>
        <Flex justify="spacebetween" align="center">
        <span>{val}</span>
        <span>
          <IconButton
            variantColor="red"
            icon="delete"
            onClick={() => {props.handleDelete(i)}}
          /> 
          {"handleArchive" in props ?
          <IconButton
            variantColor="green"
            icon="check"
            onClick={() => {props.handleArchive(val, i)}}
          /> : null }
      </span>
      </Flex>
      </ListItem>)}
    </List>
)

export { AddTaskModal, TasksList }