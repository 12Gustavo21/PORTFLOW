import React, { useState, useEffect } from 'react';

//Styles
import * as S from './style';
import GlobalStyle from './global/style';

//Images
import image1 from './assets/images/ErvaMate.png';
import image2 from './assets/images/PaoDeQueijo.png';
import image3 from './assets/images/Muance.png';
import image4 from './assets/images/Telas.png';
import image5 from './assets/images/ObjetosDePapelaria.png';
import image6 from './assets/images/Xicara.png';
import image7 from './assets/images/UIMockup.png';
import image8 from './assets/images/NatFit.png';
import image9 from './assets/images/Smartphone.png';
import image10 from './assets/images/Cafe.png';
import image11 from './assets/images/Gravacao.png';
import image12 from './assets/images/Polaroids.png';

//Icons
import FacebookIcon from './assets/icons/Facebook.svg';
import TwitterIcon from './assets/icons/Twitter.svg';
import InstagramIcon from './assets/icons/Instagram.svg';
import TelegramIcon from './assets/icons/Telegram.svg';
import WhatsappIcon from './assets/icons/WhatsApp.svg';
import YoutubeIcon from './assets/icons/Youtube.svg';


export default function App() {
  const gallery = [
    {
      id: 1,
      image: image1,
      alt: 'Eva Mate',
    },
    {
      id: 2,
      image: image2,
      alt: 'Pão de Queijo',
    },
    {
      id: 3,
      image: image3,
      alt: 'Muance',
    },
    {
      id: 4,
      image: image4,
      alt: 'Telas',
    },
    {
      id: 5,
      image: image5,
      alt: 'Objetos de Papelaria',
    },
    {
      id: 6,
      image: image6,
      alt: 'Xícara',
    },
    {
      id: 7,
      image: image7,
      alt: 'UI Mockup',
    },
    {
      id: 8,
      image: image8,
      alt: 'NatFit',
    },
    {
      id: 9,
      image: image9,
      alt: 'Smartphone',
    },
    {
      id: 10,
      image: image10,
      alt: 'Café',
    },
    {
      id: 11,
      image: image11,
      alt: 'Estudio de gravação',
    },
    {
      id: 12,
      image: image12,
      alt: 'Polaroids',
    },
    {
      id: 13,
      image: FacebookIcon,
      alt: 'Facebook',
    },
    {
      id: 14,
      image: TwitterIcon,
      alt: 'Twitter',
    },
    {
      id: 15,
      image: InstagramIcon,
      alt: 'Instagram',
    },
    {
      id: 16,
      image: TelegramIcon,
      alt: 'Telegram',
    },
    {
      id: 17,
      image: WhatsappIcon,
      alt: 'WhatsApp',
    },
    {
      id: 18,
      image: YoutubeIcon,
      alt: 'Youtube',
    }
  ]

  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);

    if (window.pageYOffset > 50) {
      if (scrollPosition > window.pageYOffset) {
        setScroll('up');
      } else {
        setScroll('down');
      }
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <GlobalStyle />
      <S.Header id='top'>
        <S.HeaderContainer>
          <S.BoxOne
            showMenu={scroll === 'up'}
            hiddenMenu={scroll === 'down'}
          >
            <S.MenuBox>
              <S.Menu>
                <S.MenuLine></S.MenuLine>
                <S.MenuLine></S.MenuLine>
                <S.MenuLine></S.MenuLine>
              </S.Menu>
            </S.MenuBox>
            <S.LogoBox>
              <S.Logo>PortFlow</S.Logo>
            </S.LogoBox>
            <S.ListBox>
              <S.List>
                <S.ListItem><a href='#top'>Home</a></S.ListItem>
                <S.ListItem>Blog</S.ListItem>
                <S.ListItem>Valores</S.ListItem>
                <S.ListItem>Portfólio</S.ListItem>
                <S.ListItem>Contato</S.ListItem>
              </S.List>
            </S.ListBox>
          </S.BoxOne>
          <S.BoxTwo>
            <S.BoxTwoContainer>
              <S.Title>
                <h2>Imagine, Discuta, Desenhe.</h2>
              </S.Title>
              <S.Subtitle>
                <p>Fale conosco</p>
              </S.Subtitle>
            </S.BoxTwoContainer>
          </S.BoxTwo>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>
        <S.MainContainer>
          <S.MainContent>
            <S.Figures>
              {
                gallery.slice(0, 4).map((item) => (
                  <S.ImageBox>
                    <img src={item.image} alt={item.alt} key={item.id} />
                  </S.ImageBox>
                ))
              }
            </S.Figures>
            <S.Figures>
              {
                gallery.slice(4, 8).map((item) => (
                  <S.ImageBox>
                    <img src={item.image} alt={item.alt} key={item.id} />
                  </S.ImageBox>
                ))
              }
            </S.Figures>
            <S.Figures>
              {
                gallery.slice(8, 12).map((item) => (
                  <S.ImageBox>
                    <img src={item.image} alt={item.alt} key={item.id} />
                  </S.ImageBox>
                ))
              }
            </S.Figures>
          </S.MainContent>
        </S.MainContainer>
      </S.Main>
      <S.Footer>
        <S.FooterContainer>
          <S.FooterContent>
            <S.Icons>
              {
                gallery.slice(12, 18).map((item) => (
                  <img src={item.image} alt={item.alt} key={item.id} title={item.alt} />
                ))
              }
            </S.Icons>
            <S.Copyright>
              <h3>Copyright</h3>
              <p>Layout produzido por Vai na Web para fins exclusivamente educacionais.
                Referência: <a href='https://br.pinterest.com/pin/464644886562510861' target="_blank" rel="noopener noreferrer" title="Referência" >https://br.pinterest.com/pin/464644886562510861</a></p>
            </S.Copyright>
          </S.FooterContent>
        </S.FooterContainer>
      </S.Footer>
    </>
  )
}