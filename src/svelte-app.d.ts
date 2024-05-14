/// <reference types="@sveltejs/kit" />

declare module '$app/navigation' {
    export function goto(href: string): Promise<void>;
}