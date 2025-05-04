import './../styles/button.css';

export default function Button({ title, downloadLink }) {
  const handleClick = () => {
    if (downloadLink) {
      const link = document.createElement("a");
      link.href = downloadLink;
      link.download = "GadianaCV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return <button className="button" onClick={handleClick}>{title}</button>;
}
