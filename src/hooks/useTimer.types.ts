export interface useTimerProps {
    ( initialMinutes: number, initialSeconds: number, reset: number ) : { minutes: number, seconds: number }
}