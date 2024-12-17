'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Github, Mail } from 'lucide-react'
import { X } from 'lucide-react'
import PasswordStrengthMeter from '@/components/password-strength-meter'
import Captcha from '@/components/captcha'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaValue, setCaptchaValue] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsFormValid(
      username.length > 0 &&
      password.length > 0 &&
      (!showCaptcha || captchaValue.length > 0)
    )
  }, [username, password, captchaValue, showCaptcha])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showCaptcha) {
      setShowCaptcha(true)
    } else if (isFormValid) {
      router.push('https://4gd.ai')
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username" className="text-sm font-medium">
            Username
          </Label>
          <Input 
            id="username" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
            className="transition-all duration-300 hover:border-primary focus:border-primary"
            placeholder="Enter your username"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <Input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="transition-all duration-300 hover:border-primary focus:border-primary"
            placeholder="Enter your password"
          />
          <PasswordStrengthMeter password={password} />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="rememberMe" 
          checked={rememberMe} 
          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
        />
        <Label 
          htmlFor="rememberMe" 
          className="text-sm text-muted-foreground cursor-pointer"
        >
          Remember me
        </Label>
      </div>

      {showCaptcha && (
        <Captcha value={captchaValue} onChange={setCaptchaValue} />
      )}

      <div className="flex justify-between items-center text-sm">
        <Link 
          href="/forgot-password" 
          className="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Forgot password?
        </Link>
        <Link 
          href="/signup" 
          className="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Create account
        </Link>
      </div>

      <div className="space-y-4">
        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          disabled={showCaptcha && !isFormValid}
        >
          {showCaptcha ? 'Verify & Sign in' : 'Sign in'}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Login with GitHub</DialogTitle>
                <DialogDescription>
                  You're about to be redirected to GitHub for authentication.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={() => router.push('/api/auth/github')}>
                Continue to GitHub
              </Button>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Login with Google</DialogTitle>
                <DialogDescription>
                  You're about to be redirected to Google for authentication.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={() => router.push('/api/auth/google')}>
                Continue to Google
              </Button>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Login with X (Twitter)</DialogTitle>
                <DialogDescription>
                  You're about to be redirected to X for authentication.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={() => router.push('/api/auth/twitter')}>
                Continue to X
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </form>
  )
}

