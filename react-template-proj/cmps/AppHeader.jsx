export function AppHeader({ onSetPage }) {
    return (
        <header className="app-header main-layout">
            <h1>My App</h1>
            <nav>
                <a onClick={() => onSetPage("home")} href="#">Home</a>
                <a onClick={() => onSetPage("about")} href="#">About</a>
                <a onClick={() => onSetPage("books")} href="#">Books</a>
            </nav>
        </header>
    )
}