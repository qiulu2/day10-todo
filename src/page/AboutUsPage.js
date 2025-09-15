import {Link} from "react-router";

export function AboutUsPage() {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1>About Todo App</h1>

                <section className="about-section">
                    <h2>📝 What is this app?</h2>
                    <p>
                        This is a modern Todo application built with React 19 and React Router 7.
                        It helps you organize your daily tasks efficiently and keep track of your productivity.
                    </p>
                </section>

                <section className="about-section">
                    <h2>✨ Features</h2>
                    <ul>
                        <li>✅ Add new tasks quickly</li>
                        <li>✅ Mark tasks as completed</li>
                        <li>✅ Edit task details</li>
                        <li>✅ Delete unwanted tasks</li>
                        <li>✅ View completed tasks separately</li>
                        <li>✅ Responsive design for all devices</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>🛠 Technology Stack</h2>
                    <ul>
                        <li><strong>Frontend:</strong> React 19, React Router 7</li>
                        <li><strong>UI Library:</strong> Ant Design</li>
                        <li><strong>HTTP Client:</strong> Axios</li>
                        <li><strong>Backend API:</strong> MockAPI</li>
                        <li><strong>State Management:</strong> React Context + useReducer</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>👨‍💻 Developer</h2>
                    <p>Built with ❤️ as a learning project to demonstrate modern React development practices.</p>
                </section>

                <div className="about-actions">
                    <Link to="/" className="back-to-app-btn">
                        Back to Todo App
                    </Link>
                </div>
            </div>
        </div>
    );
}
