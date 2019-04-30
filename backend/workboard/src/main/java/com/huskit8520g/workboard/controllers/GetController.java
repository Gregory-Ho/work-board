package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.models.Task;
import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.GET)
@CrossOrigin(origins = "http://localhost:4200")
public class GetController {

  @Autowired
  TaskRepository repository;

  @RequestMapping(path = "/tasks")
  public Iterable<Task> getAllTasks() {
    return repository.findAll();
  }

  // May want to implement a getTaskDetailById endpoint to include more information like stats and time worked on
  @RequestMapping(path = "/tasks/{id}")
  public Task getTaskById(@PathVariable int id) {
    return repository.findById(id).get();
  }
}
