// format text to add links and hashtags
export const formatText = (text: string) => {
  const words = text.split(" ");

  return words.map((word, index) => {
    if (word.startsWith("#")) {
      return (
        <span key={index} className="text-blue-500">
          {word}{" "}
        </span>
      );
    } else if (word.startsWith("http") || word.includes(".com")) {
      return (
        <a
          key={index}
          href={word}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {word}{" "}
        </a>
      );
    } else {
      return <span key={index}>{word} </span>;
    }
  });
};
