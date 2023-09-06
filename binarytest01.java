import java.util.Scanner;

public class java {
	public static void main(String obj) {
		System.out.println("10진수를 입력하세요");
		Scanner sc = new Scanner(System.in);
		int ken = sc.nextInt();
		sc.close();
		System.out.println("10진수는  " + ken);

		System.out.println("2진수는  " + Integer.toBinaryString(ken));

		System.out.println("8진수는  " + Integer.toOctalString(ken));

		System.out.println("16진수는  " + Integer.toHexString(ken));
	}
	
}