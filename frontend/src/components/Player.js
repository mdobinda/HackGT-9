import getSounds from '../utils/getSounds'
import getFile from '../utils/getFile'
import React, {useEffect, useState} from 'react'
import Sounds from '../utils/Sounds'
import {Box, Card, CardContent, CardMedia, FormControl, MenuItem, Select, Typography, IconButton, } from '@mui/material'
import {PlayArrow, Pause, SkipNext, SkipPrevious} from '@mui/icons-material'

import Song1 from "./..\\assets\\Beach_Soundscape.mp3"

import Song2 from "./..\\assets\\Distant_Thunder.mp3"

import Song3 from "./..\\assets\\Fireplace.mp3"

import Song4 from "./..\\assets\\Frying_Food.mp3"

import Song5 from "./..\\assets\\Light_Rain_And_Crickets.mp3"
import Song6 from "./..\\assets\\Perfect_Thunder_Storm.mp3"

import Song7 from "./..\\assets\\Sunny_Day.mp3"

import Song8 from "./..\\assets\\Waterfall.mp3"
let theme = null
let songArr = [Song1, Song2, Song3, Song4, Song5, Song6, Song7, Song8,]
const Player = () => {
    const [file, setFile] = useState("")
    const [value, setValue] = useState("")
    const [audio, setAudio] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const createFile = (key, val, event) => {
        event.preventDefault()
        if (audio)
        {
            audio.pause()
            setIsPlaying(false)
        }
        setAudio(new Audio(songArr[val[val.length - 1] - '1']))
        setFile(key)
        console.log(val)    
       // getFile(val).then((result) => {thing = result; setFile(result.split('\\x'))})
    }

    return (
        <div style={{width: '100%'}}>
            <FormControl>
            <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                value={value}
                onChange={(newVal) => setValue(newVal)}
                label="file"
                style={{width: '30vw', backgroundColor: 'white', color: 'black'}}
                >
                
                    {
                    Object.entries(Sounds).map(([key, val], ind) =>
                (
                <MenuItem key={ind} value={key} onClick={(event) => { createFile(key, val, event)}}>{key}</MenuItem>
                ))}
            </Select>
            </FormControl>
        
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {file}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme?.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
          </IconButton>
          <IconButton aria-label="play/pause">
            {(!audio || !isPlaying) ? <PlayArrow
             sx={{ height: 38, width: 38 }} onClick={(event) => {event.preventDefault();  isPlaying ? audio?.pause() : audio?.play(); setIsPlaying(!isPlaying)}}/>
          : <Pause sx={{ height: 38, width: 38 }} onClick={(event) => {event.preventDefault();  isPlaying ? audio?.pause() : audio?.play(); setIsPlaying(!isPlaying)}}/>
            }
            </IconButton>
          <IconButton aria-label="next">
            {theme?.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
          </IconButton>
        </Box>
      </Box>
    </Card>

        </div>
    )
}

export default Player;