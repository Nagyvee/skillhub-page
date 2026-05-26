"use client"

import { useEffect, useState } from "react"

// Fixed countdown starting point: 16 hours, 5 minutes, 20 seconds
const START_SECONDS = 16 * 3600 + 5 * 60 + 20

// Use a stable epoch so all instances share the same countdown value
const EPOCH_MS = typeof window !== "undefined"
    ? (() => {
        const stored = sessionStorage.getItem("countdown_epoch")
        if (stored) return Number(stored)
        const now = Date.now()
        sessionStorage.setItem("countdown_epoch", String(now))
        return now
    })()
    : Date.now()

function getRemaining(): number {
    const elapsed = Math.floor((Date.now() - EPOCH_MS) / 1000)
    return (START_SECONDS - (elapsed % START_SECONDS) + START_SECONDS) % START_SECONDS || START_SECONDS
}

function formatTime(totalSeconds: number): string {
    const h = Math.floor(totalSeconds / 3600)
    const m = Math.floor((totalSeconds % 3600) / 60)
    const s = totalSeconds % 60
    const pad = (n: number) => n.toString().padStart(2, "0")
    return `${pad(h)}:${pad(m)}:${pad(s)}`
}

export function CourseCountdown() {
    const [display, setDisplay] = useState("16:50:20")
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        setDisplay(formatTime(getRemaining()))

        const timer = setInterval(() => {
            setDisplay(formatTime(getRemaining()))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <span className="font-mono text-[#f59e0b] font-bold">
            {isMounted ? display : "16:05:20"}
        </span>
    )
}
