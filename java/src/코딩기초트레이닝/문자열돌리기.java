import java.util.Scanner;

public class 문자열돌리기 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        System.out.println(String.join("\n", a.split("")));
    }
}