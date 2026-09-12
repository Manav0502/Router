import BlogPost from '../components/BlogPost';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div className="layout-container layout-home">
      <div className="content-left">
        <BlogPost />
      </div>
      <div className="content-right">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;