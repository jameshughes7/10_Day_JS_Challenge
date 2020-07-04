export const firstDigit = ((str: string) : string => {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars: string[] = str.split('');
    return chars.find(char => strNums.includes(char));
})

// e.g. firstDigit(var_1__Int2) = '1'