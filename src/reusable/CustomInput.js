import { Fragment, memo } from "react"

const CustomInput = (props) => {

    const { inputChange, value, namevalue, type, ...restProps } = props

    switch (type) {
        case "select":


            return (
                <select
                    {...restProps}
                    value={value}
                    onChange={(e) => inputChange(e, namevalue)}
                >
                    <option value="">select</option>
                    {
                        restProps?.options?.map(op => {
                            const { label, value } = op
                            return <option key={value} value={value}>{label}</option>
                        })
                    }
                </select>
            )
        case "radio":
            return (<>
                <h6>{restProps.options.label}</h6>

                {restProps.options.map(op => {
                    const { label } = op
                    return <Fragment key={op.value}>
                        <label>{label}</label>
                        <input
                            type="radio"
                            value={op.value}
                            {...restProps}
                            checked={value === op.value}
                            onChange={(e) => inputChange(e, namevalue)}
                        />
                    </Fragment>
                })}
            </>

            )
        case "checkbox":

            return (
                <input
                    {...restProps}
                    type={type}
                    checked={value === true}
                    onChange={(e) => { inputChange(e, namevalue) }}
                />
            )
        case "file":

            return (
                <input
                    {...restProps}

                    type={type}
                    checked={value === true}
                    onChange={(e) => { inputChange(e, namevalue) }}
                />
            )
        case "textArea":


            return (
                <textarea
                    {...restProps}
                    value={value}
                    type={type}
                    onChange={(e) => inputChange(e, namevalue)}
                />
            )
        default:
            return (
                <input
                    {...restProps}
                    value={value}
                    type={type}
                    onChange={(e) => inputChange(e, namevalue)}
                />
            )

    }

}

export default memo(CustomInput)