
type ValidatorsType = (value: string)=>string | undefined

export const require:ValidatorsType = (value) => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxL: number):ValidatorsType => (value) => {
    if(value.length > maxL) return `Max length is ${maxL} required`
    return undefined
}