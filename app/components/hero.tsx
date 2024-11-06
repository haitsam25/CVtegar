import foto from "../foto1.jpeg";
import './hero.css';

function Profile() {
    return (
      <img
        src={foto.src}
        alt="Tegar Gimnastiar "
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-gray-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-red-400 font-bold">Tegar Gimnastiar </h1>
                <Profile />
                <p>Saya Adalah Pemain Futsal Sejak Tahun 2016</p>
                </div>
    );
}