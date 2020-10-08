import React from 'react'
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/core';

const Nav = () => {
    return (<>
      <Flex 
        as="header" 
        direction="row" 
        justify="space-between"
        bg="gray.400"
        color="white"
        p={3}
      >

      <nav>
        <Link to="/">ToDo</Link>
        <Link to="/archive">Archive</Link>
      </nav>
      <span>My ToDo App</span>
      </Flex>
    </>)
}

export default Nav
