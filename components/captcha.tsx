import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface CaptchaProps {
  value: string
  onChange: (value: string) => void
}

export default function Captcha({ value, onChange }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState('')

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setCaptchaText(result)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="captcha" className="text-sm font-medium">
          Enter the text you see below
        </Label>
        <button
          type="button"
          onClick={generateCaptcha}
          className="text-xs text-primary hover:underline"
        >
          Refresh Captcha
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-muted p-2 rounded-md select-none">
          <span className="text-lg font-bold tracking-wider text-primary">{captchaText}</span>
        </div>
        <Input
          id="captcha"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="transition-all duration-300 hover:border-primary focus:border-primary"
          placeholder="Enter captcha"
        />
      </div>
    </div>
  )
}

