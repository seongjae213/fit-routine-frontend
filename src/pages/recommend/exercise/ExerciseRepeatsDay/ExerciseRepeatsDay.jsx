import {useState} from 'react';

import Button from 'components/common/Button/Button';
import Radio from 'components/common/Radio/Radio';
import RadioGroup from 'components/common/RadioGroup/RadioGroup';
import FormBox from 'components/common/FormContainer/FormContainer';
import FormTitle from 'components/common/FormTitle/FormTitle';

import styles from 'pages/recommend/exercise/ExerciseRepeatsDay/ExerciseRepeatsDay.module.css';



export default function ExerciseRepeatsDay() {

    const [repeats, setRepeats] = useState('');
    const repeatOptions = [1, 2, 3, 4, 5, 6, 7];

    return (
        <FormBox>
            <FormTitle text="반복일" />
            <div className={styles.inputForm}>
                <RadioGroup >
                    {repeatOptions.map((day) => (
                        <Radio
                            key={`${day}+_index`}
                            id={`day${day}`}
                            name="selectRepeats"
                            value={day}
                            label={`${day}일 반복`}
                            onChnage={(e) => setRepeats(e.target.value)} />
                    ))}
                </RadioGroup>
            </div>
            <Button size="long" text="다음"></Button>
        </FormBox>
    );

};