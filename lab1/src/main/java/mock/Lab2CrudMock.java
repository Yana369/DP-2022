package mock;

import birds.Birds;
import crud.Lab2CrudInterface;

public class Lab2CrudMock implements Lab2CrudInterface {

	@Override
	public Birds readBirds() {
		// TODO Auto-generated method stub
		return new Birds("Mock1", 23, "qwerty");
	}

	@Override
	public void updateBirds(Birds birds) {
		// TODO Auto-generated method stub

	}

}