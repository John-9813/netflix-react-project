import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// molti import mi segnavano errori su percorsi di file errati anche se ho ricontrollato più volte anche rifacendo il progetto
// da zero ma non ho capito il perchè e comunque nel browser non c'erano problemi evidenti.
import React from 'react';
import './App.css';
import Navbar from './components/MyNavbar';
import MovieGallery from './components/MovieGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid px-4">
    <Navbar />
    <MovieGallery title="Trending Now" query="Star Wars" />
    <MovieGallery title="Watch it Again" query="Harry Potter" />
    <MovieGallery title="New Releases" query="Lord of the Rings" />
    <Footer />
</div>
  );
}

export default App;