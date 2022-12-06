function solution(my_string) {
    return [...my_string].map((el) => Number(el) ? Number(el) : false).filter((el) => el !== false).reduce((accumulator, currentValue) => accumulator + currentValue)
}