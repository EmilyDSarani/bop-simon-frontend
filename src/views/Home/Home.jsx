<<<<<<< HEAD
import MenuBar from '../../components/MenuBar/MenuBar';
import Game from '../../components/Game/Game';
import FreePlay from '../../components/FreePlay/FreePlay';
import styles from './home.css';
import { useState } from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
=======
import MenuBar from '../../components/MenuBar/MenuBar'
import Game from '../../components/Game/Game'
import styles from './home.css'
>>>>>>> origin/production

export default function Home() {
  const [gamePlay, setGamePlay] = useState(false);

  const handleChange = (event) => {
    setGamePlay(event.target.checked)
  }
  return (
    <main className={styles.home}>
<<<<<<< HEAD
      <MenuBar />
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel
          control={
            <Switch
              checked={gamePlay}
              onChange={handleChange}
              aria-label="play mode switch"
            />
          }
          label={gamePlay ? 'Game Mode' : 'Free Play'}
        />
      </FormGroup>
      {gamePlay ?  <Game /> : <FreePlay/>}
     
=======
      {/* <MenuBar /> */}
      <Game />
>>>>>>> origin/production
    </main>
  )
}
