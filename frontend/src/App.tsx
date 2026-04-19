import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import './App.css'

function App() {
  return (
    <header style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '1rem' }}>
      <Show when="signed-out">
        <SignInButton />
        <SignUpButton />
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </header>
  )
}

export default App
