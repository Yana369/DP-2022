package birds;

import java.util.ArrayList;
import java.util.List;

public class Mock {

	private List<Birds> birdsList = new ArrayList<>();

	public Mock() {
		this.birdsList.add(new Birds(0, "Owl", 5, "big bird"));
		this.birdsList.add(new Birds(1, "Stork", 8, "beautiful bird"));
		this.birdsList.add(new Birds(2, "Swallow", 10, "small bird"));
	
	}
	
	public List<Birds> getBirdsList() {
		return birdsList;
	}

	public void setBirdsList(List<Birds> birdsList) {
		this.birdsList = birdsList;
	}


	
	
}

