import React, { useState } from 'react'

import {
  Button,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  ModalCloseButton,
  useDisclosure,
  useToast,

} from "@chakra-ui/react";

import InputMask from 'react-input-mask';

import { FaWhatsapp } from 'react-icons/fa';

import styles from './styles.module.scss';

import { api } from '../../services/api';

import { msgHTML } from '../../util/mail/msgHTML';

export function WhatsappSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const toast = useToast();

  function successToast() {
    toast({
      title: 'Número salvo.',
      description: "Vou falar com você o mais rapido possível",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  function errorToast() {
    toast({
      title: 'Error.',
      description: "Tivemos um problema no servidor, logo mais será resolvido",
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsloading(true);

    try {
      await api.post('/mail/send-new-contact', {
        subject: "New Contact - @hugoviniccius",
        textMail: "",
        msgHtml: msgHTML({ userName: name, phoneNumber: phone, description })
      });

      successToast();
    } catch (err) {
      console.log(err);
      errorToast();
    }

    onClose();
    setIsloading(false);
  }

  return (
    <>
      <Button
        size="lg"
        leftIcon={<FaWhatsapp />}
        colorScheme="whatsapp"
        fontSize="2xl"
        py="8"
        onClick={onOpen}
      >
        Fale comigo no Whatsapp
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalCloseButton />

          <Stack
            as="form"
            w="100%"
            onSubmit={handleSubmit}
            p="6"
            align="start"
            spacing={4}
          >
            <Text fontWeight="semibold" fontSize="xl">Vou falar com você no Whatsapp</Text>

            <Text color="gray.500" fontWeight="semibold">Por favor me informe</Text>

            <Text>Seu Nome:</Text>
            <Input
              maxLength={30}
              value={name}
              isRequired
              placeholder='Nome'
              onChange={e => setName(e.target.value)}
              minLength={3}
            />

            <Text>Seu Whatsapp:</Text>
            <InputMask
              required
              mask='(99) 99999-9999'
              className={styles.input}
              value={phone}
              placeholder='Número do Whatsapp'
              onChange={e => setPhone(e.target.value)}
            />

            <Text>E descreva em que eu posso te ajudar:</Text>
            <Input
              maxLength={252}
              value={description}
              isRequired
              placeholder='Descrição'
              onChange={e => setDescription(e.target.value)}
              minLength={3}
            />

            <Stack direction="row">
              <Button
                colorScheme='whatsapp'
                mr={3}
                type="submit"
                rightIcon={<FaWhatsapp />}
                isLoading={isLoading}
              >
                Ir para o Whatsapp
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </Stack>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
}