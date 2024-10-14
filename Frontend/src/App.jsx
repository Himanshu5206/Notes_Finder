import React from 'react';
import Header from './components/Header';
import NotesCard from './components/NotesCard';
import SearchBar from './components/SearchBar';
import './App.css';  // Ensure CSS is imported here

const App = () => {
  const notes = [
    'ESSENTIAL OF SOFTWARE ENGINEERING - PART 1',
    'INTRODUCTION TO JAVA PROGRAMMING - Y. DANIEL YANG',
    'DATA STRUCTURE AND ALGORITHM MADE EASY - NARSIMHA',
  ];

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="main-content">
        <h1>Notes Finder - YOUR ONE STOP SOLUTION</h1>
        <div className="notes-container">
          {notes.map((note, index) => (
            <NotesCard key={index} title={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
