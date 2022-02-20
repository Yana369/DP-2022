package FileIO;

import birds.Birds;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Birds birds = new Birds("Mock1", 23,"qwerty");
		FileIOInterface fio = new FileIO();
		fio.saveToFile(birds);
		System.out.println((Birds)fio.loadFromFile());

	}

}
