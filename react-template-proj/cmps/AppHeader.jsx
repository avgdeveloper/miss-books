export function AppHeader({ page, onSetPage }) {
    return (
        <header className="app-header main-layout">
            <h1>My App</h1>
            <nav>
                <a className={page === "home" ? "active" : ""} onClick={() => onSetPage("home")} href="#">Home</a>
                <a className={page === "about" ? "active" : ""} onClick={() => onSetPage("about")} href="#">About</a>
                <a className={page === "books" ? "active" : ""} onClick={() => onSetPage("books")} href="#">Books</a>
            </nav>
        </header>
    )
}