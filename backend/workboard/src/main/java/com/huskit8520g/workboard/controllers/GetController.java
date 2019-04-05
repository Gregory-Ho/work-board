package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.models.Task;
import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.GET)
@CrossOrigin(origins = "http://localhost:4200")
public class GetController {

  @Autowired
  TaskRepository repository;

  @RequestMapping(path = "/tasks")
  public Iterable<Task> getAllTasks(){
    return repository.findAll();
  }

  @RequestMapping(path = "/tasks/{id}")
  public Task getTaskById(@RequestParam int id){
    return repository.findById(id).get();
  }
}
