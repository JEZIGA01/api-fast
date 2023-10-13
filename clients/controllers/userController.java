package com.projeto.clients.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.clients.entities.User;
import com.projeto.clients.repositories.UserRepository;

@RestController
@RequestMapping(value = "/users")
public class userController {
	
	@Autowired
	private UserRepository repository;
	
	@GetMapping
	public List <User> findAll(){
		List<User> result = repository.findAll();
		return result;		
	}
	
	@GetMapping(value="/{id}")
	public  User findById(@PathVariable Long id){
		 User result = repository.findById(id).get();
		return   result;		
	}

	@PostMapping
	public  User insert(@RequestBody User user){
		 User result = repository.save(user);
		return result;		
	} 
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Object> delete(@PathVariable Long id) {
		Optional<User> result = repository.findById(id); 
		
		 if(result.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}
		 repository.delete(result.get()); 
		 return ResponseEntity.status(HttpStatus.OK).body("User deleted sucessfully.");
		 
	}
}
