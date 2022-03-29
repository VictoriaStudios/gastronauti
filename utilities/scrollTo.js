export const scrollTo = (ref) => {
    if (ref.current !== null) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
}