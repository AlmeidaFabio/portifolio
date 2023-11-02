"use client"

import { AnimatedSocialMediaButtons } from '@/components/AnimatedSocialMediaButtons'
import * as Styles from '../../../styles/contacts.styles'
import { Template } from "@/components/Template"
import React, { useState, FormEvent } from 'react'

export default function Contact() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            // Handle response if necessary
            const data = await response.json()
            // ...
        } catch (error) {
            // Capture the error message to display to the user
            setError('error')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Template>
            <title>Fábio Almeida | Contatos</title>
            <Styles.ContactContainer>
                <Styles.FormArea>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder='Nome' autoFocus/>
                        <input type="text" name="email" placeholder='Email'/>
                        <textarea name="description"></textarea>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                    </form>
                </Styles.FormArea>
                <Styles.ButtonsLinksArea>
                    <AnimatedSocialMediaButtons />
                </Styles.ButtonsLinksArea>
            </Styles.ContactContainer>
        </Template>
    )
}