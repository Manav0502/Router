import heroImg from '../assets/hero.png';

function BlogPost() {
  return (
    <article className="card post-card">
      <img src={heroImg} alt="Hero Skateboard" className="hero-img" />
      <h2>TITLE HEADING</h2>
      <p className="post-meta">Title description, <span className="date">April 7, 2014</span></p>
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porta magna nec, ac accumsan tortor cursus at. Phasellus sed ultricies nisi sodales, ultrices lorem euismod placerat.
      </p>
      <div className="post-footer">
        <button className="btn-read-more">READ MORE »</button>
        <span className="comments-count">Comments <b>0</b></span>
      </div>
    </article>
  );
}

export default BlogPost;