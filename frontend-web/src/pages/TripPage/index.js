
// Import react hooks
import { useCallback, useEffect, useState } from "react";

// Import react router
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router';

// Import mui components
import Grid from "@mui/material/Grid2"
import { Typography, Grid2, Box, TextField, useMediaQuery } from "@mui/material"
import { style } from './style';

import clsx from "clsx"

import { useTheme } from '@emotion/react';
const baseUrl = "http://localhost:5000"

export default function TripPage() {
    const theme = useTheme()
    const navigate = useNavigate();
    const classes = style();
    const [searchParams] = useSearchParams();
    const [trips, setTrips] = useState([]);
    const [curKeyword, setCurKeyword] = useState("")
    const matches = useMediaQuery(theme.breakpoints.down('lg'));

    // Fetch data when search trip
    useEffect(() => {
        let url = ""
        if (curKeyword?.length === 0 || curKeyword === null) {
            url = baseUrl + "/trips"
        } else {
            url = baseUrl + `/trips?keyword=${curKeyword}`
        }
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            setTrips(data.trips)
        }).catch((error) => {
            console.error('Error:', error);
        });
    }, [curKeyword]);

    // Update state when search trip
    useEffect(() => {
        const keyword = searchParams.get("keyword")
        setCurKeyword(keyword)
    }, [searchParams])


    // Handle when typing on textfield
    const handleSearchTrips = useCallback((keyword) => {
        if (keyword === null || keyword?.length === 0) {
            navigate(`/trips`)
        } else {
            navigate(`?keyword=${keyword}`)
        }
    }, [navigate])

    // Handle when click category
    const handleClickTag = useCallback((keyword) => {
        navigate(`?keyword=${keyword}`)
    }, [navigate])

    return (
        <Box sx={{
            padding: 10, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }} rowGap={5}>
            <Grid2 size={12}>
                <Typography variant="h1" className={classes.header}>เที่ยวไหนดี</Typography>
            </Grid2>
            <Grid2 size={5} align='center'>
                <TextField id="fullWidth" hiddenLabel className={classes.textField} defaultValue="หาที่เที่ยวแล้วไปกัน..." value={curKeyword} onChange={(e) => handleSearchTrips(e.target.value)} />
            </Grid2>
            <Grid2 size={12} align='center'>
                <Grid2 container sx={{ direction: 'column', justifyContent: 'center', alignItems: 'center' }} rowSpacing={5}>
                </Grid2>
                {trips?.length > 0 ? (
                    <Grid2 size={10}>
                        <Grid2 container rowSpacing={5} size={12}
                            direction={'column'}>
                            {trips.map((trip) => {
                                return (
                                    <Grid2 size={12} align='center'>
                                        <Grid2 container columnSpacing={5}>
                                            <Grid2 ize={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }} align='center'>
                                                <img
                                                    alt=""
                                                    src={trip.photos[0]}
                                                    loading="lazy"
                                                    className={clsx(classes.imageLarge, {
                                                        [classes.imageMedium]: matches,
                                                    })}
                                                />
                                            </Grid2>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 10 }} align='left'>
                                                <Grid2 container sx={{ direction: 'column', alignContent: 'space-between', justifyContent: 'space-between', alignItems: 'stretch' }} rowSpacing={1}>
                                                    <Grid2 size={12} >
                                                        <Typography variant="h4"
                                                            onClick={() => window.open(trip.url, '_blank', 'noopener,noreferrer')}
                                                            className={classes.title}
                                                        >{trip.title}</Typography>
                                                    </Grid2>
                                                    <Grid2 size={12} >
                                                        <Typography variant="h6" className={classes.description}>{trip.description}</Typography>
                                                    </Grid2>
                                                    <Grid2 size={12} align='left'>
                                                        <Typography
                                                            variant="body1"
                                                            onClick={() => window.open(trip.url, '_blank', 'noopener,noreferrer')}
                                                            className={classes.readMore}
                                                        >อ่านต่อ</Typography>
                                                    </Grid2>
                                                    <Grid2 size={12}>
                                                        <Grid2 container sx={{ direction: 'row' }}>
                                                            <Grid2 size={1}>
                                                                <Typography variant="body1" className={classes.category}>หมวด:</Typography>
                                                            </Grid2>
                                                            <Grid2 size={'auto'}>
                                                                <Grid2 container sx={{ direction: 'row' }} columnSpacing={1}>
                                                                    {trip.tags.map((tag) => {
                                                                        return (
                                                                            <Grid2 size={'auto'}>
                                                                                <Typography className={classes.tag} onClick={() => handleClickTag(tag)}>{tag}</Typography>
                                                                            </Grid2>
                                                                        )
                                                                    })}
                                                                </Grid2>
                                                            </Grid2>
                                                        </Grid2>

                                                    </Grid2>
                                                    <Grid size={12} sx={{ maxWidth: matches ? '100%' : '60%' }}>
                                                        <Grid container columnSpacing={1}>
                                                            {trip.photos.slice(1).map((photo) => {
                                                                return (
                                                                    <Grid size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                                                                        <img
                                                                            alt=""
                                                                            src={photo}
                                                                            loading="lazy"
                                                                            style={{
                                                                                flex: 0,
                                                                                height: '180px',
                                                                                width: '200px',
                                                                                objectFit: 'cover',
                                                                                overflow: 'hidden',
                                                                                borderRadius: '15px',
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                )
                                                            })}
                                                        </Grid>
                                                    </Grid>
                                                </Grid2>
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                )
                            })}
                        </Grid2>
                    </Grid2>
                ) : (
                    <Grid2 size={12}>
                        <Typography variant="h5">ไม่มีข้อมูล</Typography>
                    </Grid2>
                )}

            </Grid2>
        </Box >
    )
}