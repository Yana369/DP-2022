package servlet;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import com.google.gson.JsonElement;
import com.google.gson.JsonIOException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import jakarta.servlet.http.HttpServletRequest;
import birds.Birds;

public class Helpers {

	public static JsonElement bodyParse(HttpServletRequest request) {
		JsonElement jsonElement=null;	
		
		try {
			jsonElement = JsonParser.parseReader(request.getReader());
		} catch (JsonIOException | JsonSyntaxException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jsonElement;
	}
	
	public static Birds birdsParse(HttpServletRequest request) {
		Birds birds = new Birds();
		JsonElement jsonElement = bodyParse(request);
		birds.setId(jsonElement.getAsJsonObject().get("id").getAsInt());
		birds.setTitle(jsonElement.getAsJsonObject().get("title").getAsString());
		birds.setAge(jsonElement.getAsJsonObject().get("age").getAsInt());
		birds.setInfo(jsonElement.getAsJsonObject().get("info").getAsString());
		
		return birds;
	}
	
	
	public static int getNextId(List<Birds> list) {
		int maxId = 0;
		Iterator<Birds> iterator = list.iterator();
		while(iterator.hasNext()) {
			int currentId = iterator.next().getId();
			if(currentId>maxId) maxId=currentId;
		}
		return maxId+1;
	}
	
	public static int getIndexBybirdsId(int Id,List<Birds> list) {
		int listId = Id;
		
		Iterator<Birds> iterator = list.iterator();
		while(iterator.hasNext()) {
			Birds temp =iterator.next();
			if(temp.getId()==listId) { 
				listId=list.indexOf(temp);
				break;
			}
		}
		return listId;
	}
	
}