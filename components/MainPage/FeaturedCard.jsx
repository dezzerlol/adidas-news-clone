import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../Layout/Container'
import { CardsTitle, CustomLink } from './Styles'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
  }
`

const ImageLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.875rem;
  font-weight: 700;
  text-decoration: underline;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  word-wrap: break-word;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CardImage = styled(Image)`
  background-size: 'contain';
  object-fit: cover;
  filter: brightness(90%);
  transform-origin: 50% 65%;
  transition: transform 1s, filter 1s ease-out;
`

const ImageText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-decoration: underline;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 1.875rem;
  margin-bottom: 1.5rem;
`

const FeaturedCard = ({ featured }) => (
  <div style={{ marginBottom: '3rem' }}>
    <Container>
      <CardsTitle>
        <CustomLink color='black' spacing='1.5px' decoration='uppercase' weight='700'>
          featured products
        </CustomLink>
      </CardsTitle>
    </Container>
    <Container>
      <CardsContainer>
        {featured.map((f) => (
          <Card key={f.id}>
            <Link href={`/${f.slug}`} passHref>
              <ImageLink>
                <CardImage src={f.mainPhoto.url} alt={f.title} width={300} height={400} quality={100} />
                <ImageText>{f.title}</ImageText>
              </ImageLink>
            </Link>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  </div>
)

export default FeaturedCard
