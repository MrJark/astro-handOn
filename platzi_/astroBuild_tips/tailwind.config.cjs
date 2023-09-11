module.exports = {
    content: ['./src/**/*/*.{astro,html,ts,tsx,mdx}'],
    theme: {
        extends: {}
    },
    plugins: [require('@tailwindcss/line-clamp')]
}