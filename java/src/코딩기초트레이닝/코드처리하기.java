class 코드처리하기 {
    public String solution(String code) {
        int mode = 0;
        String ret = "";
        for (int i=0; i<code.length(); i++) {
            if (mode == 0) {
                if ((!Character.toString(code.charAt(i)).equals("1")) && (i % 2 == 0)) {
                    ret += Character.toString(code.charAt(i));
                    
                } else if (Character.toString(code.charAt(i)).equals("1")) {
                    mode = 1;
                }
            } else if (mode == 1) {
                if ((!Character.toString(code.charAt(i)).equals("1")) && (i % 2 == 1)) {
                    ret += Character.toString(code.charAt(i));
                } else if (Character.toString(code.charAt(i)).equals("1")) {
                    mode = 0;
                }
            }
        }
        if (ret == "") return "EMPTY";
        else return ret;
    }
}