import {useEffect, useState} from "react";
import './kocokan.css';
import jar from '../assets/jar.png';
import getMessage from "../utils/message";

const Kocokan = ({daftarPemain}) => {
    const [kelompok, setKelompok] = useState(daftarPemain);
    const [mulai, setMulai] = useState(false);
    const [keluar, setKeluar] = useState(null);
    const [pesan, setPesan] = useState({})

    useEffect(() => {
        let refreshInterval;
        let timeout;
        if (mulai) {
            const refreshInterval = setInterval(() => {
                setKelompok(prevState => [...prevState.sort(() => Math.random() - 0.5)]);
            }, 150);
            timeout = setTimeout(() => {
                clearInterval(refreshInterval);
                setMulai(false);
                const kelompokBaru = [...kelompok];
                const ketangkep = kelompokBaru.shift();
                setKeluar(ketangkep);
                setKelompok([...kelompokBaru]);
                setPesan(getMessage());
            }, 4000)
        }
        return () => {
            clearInterval(refreshInterval);
            clearTimeout(timeout);
        }
    }, [mulai])
    const handleKocok = () => {
        setMulai(true);
        setKeluar(null);
    }
    return (
        <div className='container'>
            {keluar && <div className='header'>
                <span>{pesan.head}</span>
            </div>}
            <div className={mulai ? 'kocokan animasi' : 'kocokan'} onClick={handleKocok}>
                <img src={jar} className=' image' alt='toples kocokan'/>
                {(mulai === false && !keluar) && <span className=' label'>Siapaaa ya </span>}
                {mulai && <span className=' label'>{kelompok[0]} </span>}
                {(keluar) && <span className=' label'>{keluar} </span>}
            </div>
            {keluar && <div className='animasi-keluar'>
                <span>{pesan.foot}</span>
            </div>}
        </div>
    )
}

export default Kocokan;