import React, { useState } from 'react';
import Search from './Search';
import Jobs from './Jobs';

const JobSearchApp = () => {
  const [filters, setFilters] = useState({ jobTitle: '', company: '', location: '' });

  const handleSearch = (jobTitle, company, location) => {
    setFilters({ jobTitle, company, location });
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Jobs jobTitle={filters.jobTitle} company={filters.company} location={filters.location} />
    </div>
  );
};

export default JobSearchApp;