import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EgySzallasTorol = () =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('jwt');
                if (!token) {
                    throw new Error('Nem található JWT token.');
                }
                const response = await axios.put(`https://szallasjwt.sulla.hu/data/` + prompt("Kérem ai Id-t:"), {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            }
            catch (error) {
                setError('Adatok törlése sikertelen. Lehet, hogy nem vagy bejelentkezve, vagy a kért Id nem létezik.');
                console.error("Hiba az adatok törlése során: ", error);
            }
        }
        fetchData();
    }, []);

    return(
        <div>
        <h2>Szállások listája</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h2>Egy szállás törlése:</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>Törölve:</p>
          <p>{data.id} - {data.name} - {data.hostname} - {data.location} - {data.price} - {data.minimum_nights}</p>  
      </div>

);
}