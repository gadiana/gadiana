import './../styles/button.css';

export default function Button({ title }) {
  const handleClick = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <button className="button" onClick={handleClick}>{title}</button>;
}
