class 조건문자열 {
    public int solution(String ineq, String eq, int n, int m) {
        System.out.println(eq.equals("="));
        
        if (ineq.equals("<")) {
            if (eq.equals("=")) {
                if (n <= m) return 1;
                else return 0;
            } else {
                if (n < m) return 1;
                else return 0;
            }
        } else {
            if (eq.equals("=")) {
                if (n >= m) return 1;
                else return 0;
            } else {
                if (n > m) return 1;
                else return 0;
            }
        }
    }
}