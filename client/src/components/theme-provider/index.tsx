import React from "react"

type ThemeContextType = {
  theme: "dark" | "light"
  toggleTheme: () => void
}
export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => null,
})
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = localStorage.getItem("theme")
  const curentTheme = storedTheme ? (storedTheme as "dark" | "light") : "dark"
  const [theme, setTheme] = React.useState(curentTheme)

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme)
      return newTheme
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={`${theme} text-foreground bg-background`}>
        {children}
      </main>
    </ThemeContext.Provider>
  )
}
