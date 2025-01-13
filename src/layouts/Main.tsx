type MainProps = {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="min-h-screen max-w-full bg-light-very-light-gray dark:bg-dark-very-dark-blue dark:text-white font-customLight">
      {children}
    </main>
  )
}