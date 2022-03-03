import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './leaderboard.module.css'
import { useState, useEffect } from 'react'
import LeaderList from '../../components/LeaderList/LeaderList'
import { getByHighScore } from '../../services/user'

export default function Leaderboard() {
  const [scoreLeaders, setScoreLeaders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLeaderBoard = async () => {
      const leaders = await getByHighScore()
      setScoreLeaders(leaders)
      setIsLoading(false)
    }
    getLeaderBoard()
  }, [])

  return (
    <section className={styles.leaderWrapper}>
      <MenuBar />
      <section className={styles.leaderCard}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <LeaderList leaders={scoreLeaders} />
        )}
      </section>
    </section>
  )
}
