import React, { useCallback } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Image } from '../../view/EditAnimate'

type Props = {
    num: number
    image: Image
    setImage: React.Dispatch<React.SetStateAction<Image>>
}

const EditImageArea = ({ num, image, setImage }: Props) => {
    const previeImage = useCallback(
        (file: File) => {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = (event: ProgressEvent<FileReader>) => {
                const { target } = event
                if (!target) return
                setImage((_image) => ({
                    ..._image,
                    src: target.result as string
                }))
            }
        },
        [setImage]
    )

    const handleImage = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { files } = event.currentTarget
            if (!files || files?.length === 0) return
            previeImage(files[0])
        },
        [previeImage]
    )

    const handleRadioButton = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setImage((_image) => ({
                ..._image,
                imageStyle: {
                    ..._image.imageStyle,
                    width: (event.target as HTMLInputElement).value
                }
            }))
        },
        [setImage]
    )

    return (
        <div className='edit_image_area'>
            <div className='preview'>
                <h3>{`Image ${num}`}</h3>
                <div className='image_container'>
                    <img src={image.src} alt='' />
                </div>
                <form name='select_image_form'>
                    <label htmlFor='select_image_form'>
                        <span>select image</span>
                        <input
                            type='file'
                            accept='image/*'
                            style={{
                                display: 'none'
                            }}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleImage(e)}
                        />
                    </label>
                </form>
            </div>
            <div className='form_control_wrapper'>
                <FormControl>
                    <FormLabel id='radio-buttons-group-label'>Size</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby='radio-buttons-group-label'
                        name='row-radio-buttons-group'
                        value={image.imageStyle.width}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleRadioButton(e)
                        }
                    >
                        <FormControlLabel
                            value='150px'
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': {
                                            color: '#1976d2'
                                        }
                                    }}
                                />
                            }
                            label='Small'
                        />
                        <FormControlLabel
                            value='170px'
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': {
                                            color: '#1976d2'
                                        }
                                    }}
                                />
                            }
                            label='Meddium'
                        />
                        <FormControlLabel
                            value='200px'
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': {
                                            color: '#1976d2'
                                        }
                                    }}
                                />
                            }
                            label='Large'
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default EditImageArea
