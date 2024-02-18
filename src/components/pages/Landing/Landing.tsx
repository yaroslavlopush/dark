// import { signOut } from 'next-auth/react';
// import { FileInput, Slider } from './components';

const Landing = () => {
  const handleSignOut = () => {
    console.log('sign OUT');
  };

  return (
    <>
      <div>
          <iframe
            src='https://www.youtube.com/embed/U9rAmaxdvNw?si=5SoXBdf4vuYQ4HZ2'
            title='Demo video'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
       
        <div>
           LOAD FILE
        </div>

        <div>
            SLIDER
        </div>

        <div >
          <button >Create CV with AI</button>
        </div>
      </div>

      <button onClick={handleSignOut}>
        EXIT
      </button>
    </>
  );
};

export default Landing;