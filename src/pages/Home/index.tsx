import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'
import {
  HomeContainer,
  StartCoutdownButton,
  StopCoutdownButton,
} from './styles'

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  interface NewCycleFormData {
    task: string
    minutesAmount: number
  }

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function actionCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(actionCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCoutdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCoutdownButton>
        ) : (
          <StartCoutdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCoutdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
