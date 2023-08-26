import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">The Repair Shop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the seaside town of Helsingborg, The Repair Shop provides trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    The Repair Shop<br />
                    555 Mariastaden<br />
                    Helsingborg, Sweden 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: John Doe</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public