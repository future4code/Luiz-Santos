import Header from './components/Header';
import CardVideo from './components/CardVideo';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './styles.css';

function App() {
  const handleClickVideo = () => {
    alert('O vídeo está sendo reproduzido');
  };

  return (
    <div className='tela-inteira'>
      <Header />
      <main>
        <Sidebar />
        <section className='painel-de-videos'>
          <CardVideo
            className='media1'
            url='https://picsum.photos/400/400?a=1'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media2'
            url='https://picsum.photos/400/400?a=2'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media3'
            url='https://picsum.photos/400/400?a=3'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media4'
            url='https://picsum.photos/400/400?a=4'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media5'
            url='https://picsum.photos/400/400?a=5'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media6'
            url='https://picsum.photos/400/400?a=6'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media7'
            url='https://picsum.photos/400/400?a=7'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
          <CardVideo
            className='media8'
            url='https://picsum.photos/400/400?a=8'
            titulo='Título Video'
            handleClickVideo={handleClickVideo}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
