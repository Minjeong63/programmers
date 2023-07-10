class 두수의연산값비교하기 {
    public int solution(int a, int b) {
        int answer1 = Integer.parseInt("" + a + b);
        int answer2 = Integer.parseInt("" + 2 * a * b);
        return answer1 > answer2 ? answer1 : answer2;
    }
}