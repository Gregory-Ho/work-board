package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.DELETE)
@CrossOrigin(origins = "http://localhost:4200")
public class DeleteController {

  @Autowired
  TaskRepository repository;

  @RequestMapping("/tasks/{id}")
  public void deleteTask(@PathVariable int id) {
    repository.deleteById(id);
  }
}
