import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    thumb: {
        height: 4,
        width: 4,
        backgroundColor: '#211f1f',
    }
});

function valuetext(value) {
    return `${value}лв.`;
}

export function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = useState([0, 0]);
    const [priceRange, setPriceRange] =useState([0,0])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClick = () => {
        props.handleFilterClick(value)
    }
    useEffect(()=>{
        setPriceRange(props.priceRange)
        setValue(props.priceRange)

    },[props.priceRange])

    return (
        <div>
            <div className='price-slider-wrapper'>
                <div className='price-slider'>
                    <div className='user-interface-slider-range'></div>
                    <div className={classes.root}>
                        <Slider
                            step={20}
                            min={priceRange[0]}
                            max={priceRange[1]}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />
                    </div>

                </div>
                <div className='price-slider-amount'>
                    <button onClick={handleClick} className='actualButton'>Filter</button>
                    <div className='price-label'>
                        Цена:
                        <span className="from">{value[0]}лв.</span>
                        /
                        <span className="to">{value[1]}лв.</span>
                    </div>
                    <div className='clear'></div>

                </div>
            </div>

        </div>

    );
}
