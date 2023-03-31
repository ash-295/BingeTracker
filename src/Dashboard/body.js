import './body.css';
import {motion} from 'framer-motion';
import Card from './card';
import { useEffect, useRef, useState } from 'react';
import trendingData, { movieData, seriesData } from './trending';

function Body() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    return (
        <>
            <motion.div ref={carousel} className='outer-area'>
                <h1>Trending Animes</h1>
                <motion.div 
                    drag= "x" 
                    dragConstraints={{right:0, left: -width}} 
                    animate={{x: -width}} 
                    transition={{ repeat: Infinity, duration: 20 }} 
                    className='inner-area'>
                    {trendingData.map((eachData) => {
                        return(
                            <Card
                                key = {eachData.name}
                                showimg = {eachData.imgSrc}
                                name = {eachData.name}
                            />
                        )
                    })}
                </motion.div>
            </motion.div>  
            <motion.div ref={carousel} className='outer-area'>
                <h1>Trending Movies</h1>
                <motion.div 
                    drag= "x" 
                    dragConstraints={{right:0, left: -width}} 
                    animate={{x: -width}} 
                    transition={{ repeat: Infinity, duration: 20 }} 
                    className='inner-area'>
                    {movieData.map((eachData) => {
                        return(
                            <Card
                                key = {eachData.name}
                                showimg = {eachData.imgSrc}
                                name = {eachData.name}
                            />
                        )
                    })}
                </motion.div>
            </motion.div>  
            <motion.div ref={carousel} className='outer-area'>
                <h1>Trending Web Series</h1>
                <motion.div 
                    drag= "x" 
                    dragConstraints={{right:0, left: -width}} 
                    animate={{x: -width}} 
                    transition={{ repeat: Infinity, duration: 20 }} 
                    className='inner-area'>
                    {seriesData.map((eachData) => {
                        return(
                            <Card
                                key = {eachData.name}
                                showimg = {eachData.imgSrc}
                                name = {eachData.name}
                            />
                        )
                    })}
                </motion.div>
            </motion.div>  
        </>
    );
}

export default Body;
