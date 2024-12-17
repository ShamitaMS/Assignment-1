import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/50">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="backdrop-blur-sm bg-card/80 rounded-2xl shadow-lg p-8 border border-border/50">
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <Button type="submit" className="w-full">Reset Password</Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/" className="text-primary hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

