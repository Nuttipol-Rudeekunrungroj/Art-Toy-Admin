

import React from 'react';

function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-xl font-bold mb-4">Admin Dashboard</div>
      
      <div className="w-full max-w-screen-lg h-full">
        <iframe
          className="bg-gray-200 border-none rounded shadow-lg w-full h-[75vh] md:h-[90vh]"
          src="https://charts.mongodb.com/charts-art-toy-trexblackhole-dmuqhqc/embed/dashboards?id=6751762d-a4c4-474d-8d60-3dc07b36f0f3&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
          title="MongoDB Dashboard"
        />
      </div>
    </div>
  );
}

export default AdminDashboard;








