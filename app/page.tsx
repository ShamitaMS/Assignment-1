import LoginForm from '@/components/login-form'
import ThemeToggle from '@/components/theme-toggle'
import WelcomeText from '@/components/welcome-text'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/50 transition-colors duration-300">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="backdrop-blur-sm bg-card/80 rounded-2xl shadow-lg p-8 border border-border/50 transition-all duration-300 hover:shadow-xl">
          <WelcomeText />
          <LoginForm />
        </div>
      </div>
    </div>
  )
} 

