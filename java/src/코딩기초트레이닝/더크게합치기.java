class 더크게합치기 {
    public int solution(int a, int b) {
        String answer1 = "";
        String answer2 = "";
        answer1 += Integer.toString(a) + Integer.toString(b);
        answer2 += Integer.toString(b) + Integer.toString(a);
        return Integer.parseInt(answer1) > Integer.parseInt(answer2) ? Integer.parseInt(answer1) : Integer.parseInt(answer2);
    }
}