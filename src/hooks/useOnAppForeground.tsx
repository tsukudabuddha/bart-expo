import { useRef, useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'

const useOnAppForeground = (onAppForeground: () => void): null => {
  const appState = useRef<AppStateStatus>(AppState.currentState)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        onAppForeground()
      }
      appState.current = nextAppState
    })

    return () => {
      subscription.remove()
    }
  }, [onAppForeground])

  return null
}

export default useOnAppForeground
