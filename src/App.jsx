import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/SearchDiv/Search';
import Jobs from './components/JobDiv/Jobs';
import Value from './components/ValueDiv/Value';
import Footer from './components/Footer/Footer';

const App = () => {
  // State to keep track of search parameters
  const [searchParams, setSearchParams] = useState({
    jobTitle: '',
    company: '',
    location: ''
  });

  // Function to handle search input changes
  const handleSearch = (title, company, location) => {
    setSearchParams({ jobTitle: title, company: company, location: location });
  };

  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search onSearch={handleSearch} />
      <Jobs
        jobTitle={searchParams.jobTitle}
        company={searchParams.company}
        location={searchParams.location}
      />
      <Value />
      <Footer />
    </div>
  );
};

export default App;