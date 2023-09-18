import { memo } from "react"

const CustomInput = (props) => {
    const { inputChange, value, namevalue, ...restProps } = props

    return (
        <input
            {...restProps}
            value={value}
            onChange={(e) => inputChange(e, namevalue)}
        />
    )
}

export default memo(CustomInput)