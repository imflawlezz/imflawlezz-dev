export const InDev = () => {
    return (
        <section className="w-screen h-screen flex flex-col gap-4 text-center items-center justify-center">
            <h1 className="text-4xl leading-tight uppercase">Site in development</h1>
            <p className="text-sm">If you are seeing this, then everything works fine</p>
            <p>GitHub: <a
                href="https://github.com/imflawlezz"
                className="underline hover:text-red-400 transition-all duration-200"
            >
                imflawlezz
            </a>
            </p>
        </section>
    )
}