import java.util.Scanner;

public class 대소문자바꿔서출력하기 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String result = "";
        for (int i=0; i<a.length(); i++) {
            if (Character.toUpperCase(a.charAt(i)) == a.charAt(i)) result += Character.toLowerCase(a.charAt(i));
            else if (Character.toLowerCase(a.charAt(i)) == a.charAt(i)) result += Character.toUpperCase(a.charAt(i));
        }
        System.out.println(result);
    }
}