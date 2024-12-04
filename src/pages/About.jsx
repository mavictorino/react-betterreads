import React from "react";
import Books from "/assets/books.jpg"
import '../App.css'

function AboutPage() {
    return (
        <div className="about">
            <div
                className="about-top"
                style={{ backgroundImage: `url(${Books})` }}
            ></div>
            <div className="about-bottom">
                <h1>About this project</h1>
                <p>This app was created to help book lovers like you organize personal libraries, discover new reads, and manage your collection—all with just a few clicks.</p>
                <br></br>
                <p>With the Google Books API at your fingertips, finding and saving books has never been easier. Want to add a personal touch? BetterReads lets you manage your library with features to add, edit, and delete entries seamlessly. Thanks to the Firebase Realtime Database, every change you make is stored in real-time, keeping your library perfectly synced across devices. </p>
                <br></br>
                <p>Built using React and Vite for a fast, responsive interface, BetterReads ensures you can browse, search, and enjoy your library anywhere, anytime. And don’t worry—this is just the beginning. Future updates will bring exciting features like personalized book recommendations, user reviews, and even more tools to enhance your reading adventures.</p>
                <br></br>
                <p>So, whether you’re curating your collection or exploring new titles, BetterReads is your ultimate book companion!
                </p>
            </div>
        </div>
    )
}

export default AboutPage