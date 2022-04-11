import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';



export default function ModalComponent({ isOpen, onOpen, onClose, body }) {
    
    return (
      <>
        
  
        <Modal isOpen={isOpen} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hello,</ModalHeader>
            
            <ModalBody>
              <Text>{body}</Text>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
}
