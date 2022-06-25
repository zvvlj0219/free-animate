import { useState, useCallback } from 'react'
import { Image, paddingProvider } from '../../view/EditAnimate';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
    num: number
    image: Image
    setImage: React.Dispatch<React.SetStateAction<Image>>
}

const EditImageArea = ({
    num,
    image,
    setImage
}: Props) => {
    const previeImage = useCallback((file: File) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = (event: ProgressEvent<FileReader>) => {
            const { target } = event
            if(!target) return
            setImage(_image => ({
                ..._image,
                src: target.result as string
            }))
        }
    },[])

    const handleImage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.currentTarget
        if (!files || files?.length === 0) return
        previeImage(files[0])
    },[])

    const handleRadioButton = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(_image => ({
            ..._image,
            imageStyle: {
                ..._image.imageStyle,
                width: (event.target as HTMLInputElement).value
            }
        }))
    },[])

    return (
        <div className='editimagearea'>
            <div className='imagenumber'>
                <h3>{`Image ${num}`}</h3>
            </div>
            <div className='preview'>
                <img
                    // sample style
                    style={{
                        width: '170px',
                        height: 'auto'
                    }}
                    src={image.src}
                    alt=''
                />
            </div>
            <div>
                <form>
                    <label>
                        <span
                            style={{
                                backgroundColor: 'pink'
                            }}
                        >select image</span>
                        <input
                            type='file'
                            accept='image/*'
                            style={{
                                display:'none'
                            }}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImage(e)}
                        />
                    </label>
                </form>
            </div>
            <div className='formcontrol wrapper'>
                <FormControl>
                    <FormLabel id="radio-buttons-group-label">Size</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={image.imageStyle.width}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRadioButton(e)}
                    >
                        <FormControlLabel value='150px' control={<Radio />} label="Small" />
                        <FormControlLabel value="170px" control={<Radio />} label="Meddium" />
                        <FormControlLabel value="200px" control={<Radio />} label="Large" />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
    )
}

export default EditImageArea
