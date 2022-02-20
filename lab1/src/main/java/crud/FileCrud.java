package crud;

import FileIO.FileIO;
import FileIO.FileIOInterface;
import birds.Birds;

public class FileCrud implements Lab2CrudInterface {
	
	FileIOInterface fio;

	public FileCrud() {
	this.fio = new FileIO();
	}

	@Override
	public Birds readBirds() {
		// TODO Auto-generated method stub
		return (Birds) fio.loadFromFile();
	}

	@Override
	public void updateBirds(Birds birds) {
		// TODO Auto-generated method stub
		fio.saveToFile(birds);

	}
}