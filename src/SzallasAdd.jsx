import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export const SzallasAdd = () => {
    const navigate = useNavigate();
    const vantaRef = useRef(null);


    useEffect(() => {
        const vantaEffect = NET({
            el: vantaRef.current,
            THREE,
            color: 0xff0000, // Karácsonyi piros
            backgroundColor: 0x001f3f, // Mélykék háttér
            points: 12.0,
            maxDistance: 20.0,
            spacing: 18.0,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div ref={vantaRef} style={{ minHeight: "100vh", color: "white" }} className="p-5 m-auto text-center content bg-lavender">
            <div>
                <h2>Új szállás hozzáadása</h2>
                <div className="card col-sm3 m-1 p-2">
                    <form
                        onSubmit={
                            (e) => {
                                e.preventDefault();
                                const formData = {
                                    name: e.target.name.value,
                                    hostname: e.target.hostname.value,
                                    location: e.target.location.value,
                                    price: parseFloat(e.target.price.value),
                                    minimum_nights: e.target.minimum_nights.value
                                };
                                axios.post("https://szallasjwt.sulla.hu/data/", formData, {
                                    headers: { 'Content-Type': 'application/json' },
                                })
                                    .then(() => navigate("/"))
                                    .catch((error) => console.error("Hiba történt: ", error));
                            }
                        }>
                        <div className="form-group row pb-3">
                            <label className="col-sm-3 col-form-label">Szállás neve</label>
                            <div className="col-sm-9">
                                <input type="text" name="name" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row pb-3">
                            <label className="col-sm-3 col-form-label">Szállásadó neve:</label>
                            <div className="col-sm-9">
                                <input type="text" name="hostname" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row pb-3">
                            <label className="col-sm-3 col-form-label">Szállás helye:</label>
                            <div className="col-sm-9">
                                <input type="text" name="location" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row pb-3">
                            <label className="col-sm-3 col-form-label">Ár:</label>
                            <div className="col-sm-9">
                                <input type="number" name="price" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row pb-3">
                            <label className="col-sm-3 col-form-label">Minimum foglalható éjszakák:</label>
                            <div className="col-sm-9">
                                <input type="number" name="minimum_nights" className="form-control" />
                            </div>
                        </div>
                        <div>
                            <Link to="/" className="bi bi-backspace-fill fs-6 btn btn-danger"> Vissza</Link>&nbsp;&nbsp;&nbsp;
                            <button type="submit" className="bi bi-send btn btn-success fs-6"> Küldés</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

