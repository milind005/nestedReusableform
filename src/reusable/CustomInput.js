import { memo } from "react"

const CustomInput = (props) => {
    const { inputChange, namevalue, ...restProps } = props

    return (
        <input
            {...restProps}
            onChange={(e) => inputChange(e, namevalue)}
        />
    )
}

export default memo(CustomInput)