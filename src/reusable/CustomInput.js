import { memo } from "react"

const CustomInput = (props) => {
    const { inputChange, namevalue } = props

    return (
        <input
            {...props}
            onChange={(e) => inputChange(e, namevalue)}
        />
    )
}

export default memo(CustomInput)