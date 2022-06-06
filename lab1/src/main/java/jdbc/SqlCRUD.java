package jdbc;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import birds.Birds;
import servlet.LabCRUDInterface;

public class SqlCRUD implements LabCRUDInterface<Birds> {
	
	Connection connection;
	
public SqlCRUD() {
		
		this.connection = new Connect().getCon();
		System.out.println(connection);
		
	}

	public Connection getConnection() {
		return connection;
	}

	public void setConnection(Connection connection) {
		this.connection = connection;
	}

	@Override
	public void create(Birds t) {
		// TODO Auto-generated method stub
		try (PreparedStatement st = connection.prepareStatement("INSERT INTO Birds (title,age,info) " + "VALUES (?,?,?)")) {
			st.setString(1, t.getTitle());
			st.setInt(2, t.getAge());
			st.setString(3, t.getInfo());
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Override
	public List<Birds> read() {
		// TODO Auto-generated method stub
		List<Birds> list = new ArrayList<>();

		try (Statement st = connection.createStatement(); ResultSet rs = st.executeQuery("SELECT * FROM Birds;");) {
			while (rs.next()) {
				list.add(new Birds(rs.getInt(1),rs.getString(2),rs.getInt(3), rs.getString(4)));
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return list;
	}
		

	@Override
	public void update(int id, Birds t) {
		// TODO Auto-generated method stub
		try(PreparedStatement st = connection.prepareStatement("UPDATE Birds " + "SET \"title\"=?,\"age\"=?, \"info\"=? WHERE id=?;")){
			st.setString(1, t.getTitle());
			st.setInt(2, t.getAge());
			st.setString(3, t.getInfo());
			st.setInt(4, id);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		try(PreparedStatement st =
				connection.prepareStatement("DELETE FROM Birds WHERE id=?;")){
			st.setInt(1, id);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
