function AdminDashboard() {
  return (
    <div>
      <div>admin dashboard</div>
      <div>
        <iframe
          style={{
            background: '#F1F5F4',
            border: 'none',
            borderRadius: '2px',
            boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
            width: '100vw',
            height: '100vh',
          }}
          src="https://charts.mongodb.com/charts-art-toy-trexblackhole-dmuqhqc/embed/dashboards?id=6751762d-a4c4-474d-8d60-3dc07b36f0f3&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
          title="MongoDB Dashboard"
        />
      </div>
    </div>
  );
}

export default AdminDashboard;






