import { useCallback } from 'react';
import { Text } from '../../view/EditAnimate';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
    num: number
    text: Text
    setText: React.Dispatch<React.SetStateAction<Text>>
}

const EditTextArea = ({
    num,
    text,
    setText
}: Props) => {
    const handleText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setText(_text => ({
            ..._text,
            text: (event.target as HTMLInputElement).value,
        }))
    },[])

    const handleRadioButton = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setText(_text => ({
            ..._text,
            textStyle: {
                ..._text.textStyle,
                fontSize: (event.target as HTMLInputElement).value,
            }
        }))
    },[])

    return (
        <div className='edit_text_area'>
            <div className='form_input'>
                <h3>{`Text ${num}`}</h3>
                <input
                    type='text'
                    value={text.text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleText(e)}
                />
            </div>
            <div className='form_control_wrapper'>
                <FormControl>
                    <FormLabel id="radio-buttons-group-label">Size</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={text.textStyle.fontSize}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRadioButton(e)}
                    >
                        <FormControlLabel
                            value='30px'
                            control={<Radio
                                sx={{
                                    color: 'white',
                                    '&.Mui-checked': {
                                      color: '#1976d2',
                                    },
                                }}    
                            />}
                            label="Small"
                        />
                        <FormControlLabel
                            value='40px'
                            control={<Radio
                                sx={{
                                    color: 'white',
                                    '&.Mui-checked': {
                                      color: '#1976d2',
                                    },
                                }}    
                            />}
                            label="Meddium"
                        />
                        <FormControlLabel
                            value='50px'
                            control={<Radio
                                sx={{
                                    color: 'white',
                                    '&.Mui-checked': {
                                      color: '#1976d2',
                                    },
                                }}    
                            />}
                            label="Large"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default EditTextArea
