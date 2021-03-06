import { ActionIcon, Modal } from '@mantine/core'
import React, { useState } from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { FiChevronDown, FiGrid, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { useAppContext } from '../../../context/AppContext'
import PopupImage from './PopupImage'

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  max-width: 362px;
`

const FirstString = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem 2rem;
`

const PhotoNumber = styled.div`
  color: #999;
  font-family: AdineuePRO;
  font-size: 26px;
  letter-spacing: 5px;
`

const ModalTitle = styled.h5`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 26px;
  text-transform: uppercase;
  line-height: 24px;
  margin-top: 10px;
  max-height: 88px;
  letter-spacing: 1.5px;
  font-family: AdineuePRO;
  padding-left: 2rem;
  padding-right: 2rem;
`

const Text = styled.p`
  padding-left: 2rem;
  padding-right: 2rem;
`

const ButtonContainer = styled.div`
  padding: 0 2rem 0.5rem 2rem;
`

const CustomButton = styled.button`
  text-transform: uppercase;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '')};
  color: ${(props) => (props.color ? props.color : '')};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1rem 1rem 1rem 1.5rem;
  width: 100%;
  text-align: left;
  border: 0.5px solid black;
  cursor: pointer;
  transition: 0.2s all;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:active {
    transform: scale(0.97);
  }
`

const SneakerPopup = ({ open, setOpen, clicked, mediaPhotos, title }) => {
  const { dispatch } = useAppContext()
  const [addedAlert, setAddedAlert] = useState(false)
  const [current, setCurrent] = useState(clicked) // number of current photo
  const [currentId, setCurrentId] = useState() // id of current photo
 

  const AddToCart = () => {
    setAddedAlert(true)
    dispatch({ type: 'ADD_MEDIA_FILE', media: { url: currentId, imgtitle: title } })

    setTimeout(() => {
      setAddedAlert(false)
    }, 3000)
  }

  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      centered
      withCloseButton={false}
      padding={0}
      size='1280px'
      style={{ display: 'flex', justifyContent: 'center' }}>
      <ModalContainer>
        <PopupImage
          clicked={clicked}
          mediaPhotos={mediaPhotos}
          title={title}
          current={current}
          setCurrent={setCurrent}
          addedAlert={addedAlert}
          setCurrentId={setCurrentId}
        />

        <TextContainer>
          <FirstString>
            <PhotoNumber>
              <span style={{ color: 'black' }}>{current}</span>/<span>{mediaPhotos.length}</span>
            </PhotoNumber>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FiGrid size='1.4rem' color='black' style={{ marginRight: '1rem' }} />
              <ActionIcon variant='transparent' onClick={() => setOpen(false)} title='close modal button'>
                <FiX size='1.4rem' color='black' />
              </ActionIcon>
            </div>
          </FirstString>

          <ModalTitle>{title}</ModalTitle>
          <ButtonContainer>
            <CustomButton bgcolor='white' color='black'>
              download file
              <FiChevronDown fontSize='1.4rem' />
            </CustomButton>
          </ButtonContainer>
          <ButtonContainer>
            <CustomButton bgcolor='black' color='white' onClick={AddToCart}>
              add file to media cart
              <CgArrowLongRight fontSize='1.4rem' />
            </CustomButton>
          </ButtonContainer>
          <Text>
            <strong>ID: </strong>
            {696969}
          </Text>

          <Text>
            <strong>Caption: </strong>
            {title}
          </Text>
          <Text>
            <strong>Usage Rights/Restrictions: </strong>
            This media asset is free for editorial broadcast, print, online and radio use. It is restricted for use for other purposes.
          </Text>
        </TextContainer>
      </ModalContainer>
    </Modal>
  )
}

export default SneakerPopup
