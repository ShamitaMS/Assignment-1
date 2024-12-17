import { useEffect, useState } from 'react'

interface PasswordStrengthMeterProps {
  password: string
}

export default function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const [strength, setStrength] = useState(0)

  useEffect(() => {
    const calculateStrength = () => {
      let score = 0
      if (password.length > 6) score++
      if (password.length > 10) score++
      if (/[A-Z]/.test(password)) score++
      if (/[0-9]/.test(password)) score++
      if (/[^A-Za-z0-9]/.test(password)) score++
      setStrength(score)
    }

    calculateStrength()
  }, [password])

  const getColor = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'bg-red-500'
      case 2:
      case 3:
        return 'bg-yellow-500'
      case 4:
      case 5:
        return 'bg-primary'
      default:
        return 'bg-gray-300'
    }
  }

  return (
    <div className="mt-2">
      <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-300 ease-in-out`}
          style={{ width: `${(strength / 5) * 100}%` }}
        ></div>
      </div>
      <p className="text-xs text-muted-foreground mt-1">
        {strength === 0 && 'Very weak'}
        {strength === 1 && 'Weak'}
        {strength === 2 && 'Fair'}
        {strength === 3 && 'Good'}
        {strength === 4 && 'Strong'}
        {strength === 5 && 'Very strong'}
      </p>
    </div>
  )
}

