import styles from './page.module.css'
import ControlButton from "./components/ControlButton";
import SQSManager from "./services/sqs";

export default function Home() {

  const buttonList = [
    {
      name: 'Next',
      action: 'next'
    },
    {
      name: 'Previous',
      action: 'previous'
    }
  ]

  const handleClick = async (action: string) => {

    const sqs = new SQSManager()

    try {
      await sqs.sendSQSMessage(action)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <main className={styles.main}>
        {buttonList.map((button) => (
            <ControlButton
                onClick={() => handleClick(button.action)}
                key={button.name}
            >
              {button.name}
            </ControlButton>
        ))}
      </main>
  )
}
