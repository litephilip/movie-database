import './about.css';

export default function About() {
  return (
    <div className="about-page">
      <h1>About Us!</h1>
      <p className="about-us-paragraph">
        Welcome to the about page! The API is a bit unstable and something you
        might get statusCode 522. Refresh the page or close the tab to try
        again, thank you!
      </p>
    </div>
  );
}
