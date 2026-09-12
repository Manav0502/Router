import BlogPost from '../components/BlogPost';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="layout-container layout-dashboard">
      <div className="content-left">
        <Sidebar />
      </div>
      <div className="content-right">
        <BlogPost />
      </div>
    </div>
  );
}

export default Dashboard;