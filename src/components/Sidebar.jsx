import heroImg from '../assets/hero.png';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="card profile-card">
        <img src={heroImg} alt="Profile" className="profile-img" />
        <h3>My Name</h3>
        <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
      </div>

      <div className="card popular-posts">
        <h3>Popular Posts</h3>
        <ul>
          <li><strong>Lorem</strong><br /><small>Sed mattis nunc</small></li>
          <li><strong>Ipsum</strong><br /><small>Praesent tincidunt</small></li>
          <li><strong>Dorum</strong><br /><small>Ultricies congue</small></li>
          <li><strong>Mingsum</strong><br /><small>Lorem ipsum dipsum</small></li>
        </ul>
      </div>

      <div className="card tags-card">
        <h3>Tags</h3>
        <div className="tag-cloud">
          <span>Travel</span> <span>New York</span> <span>London</span> <span>IKEA</span> <span>DIY</span>
          <span>Ideas</span> <span>Baby</span> <span>Family</span> <span>News</span> <span>Clothing</span> <span>Shopping</span> <span>Sports</span> <span>Games</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;