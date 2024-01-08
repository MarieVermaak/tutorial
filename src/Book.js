 export const Book = (props) => {
  const { img, title, author} = props;
 

  return (
    <article className='book'>
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};