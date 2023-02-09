import CustomInput from '@/components/CustomInput'
import FormBox from '@/components/FormBox'
import React from 'react'
export default function UserLogin() {

    const [abhaNumber, setAbhaNumber] = React.useState('')
    const handleAbhaNumberOnChange = (event) => {
        const input = event.target.value
        // abha number regex
        const abhaRegex = /^[0-9]{10}$/
        if (abhaRegex.test(input)) {
            setAbhaNumber(input)
        }
    }


    return <>
        {/* <div></div> Header */}

        <FormBox>
            <div>
                <CustomInput label={"ABHA Number"} placeholder={"Enter ABHA Number"} onChange={handleAbhaNumberOnChange}  ></CustomInput>
            </div>
        </FormBox>

        {/* <div></div> Footer */}
    </>
}
